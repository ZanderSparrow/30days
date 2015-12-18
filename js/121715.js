
$(function() {


  var dataset = [];
  d3.csv("../resources/inpatient_payments39.csv", function(data) {
    dataset = data.map(function(d) { return { state: d["Provider State"], charges : +d["Average Total Payments"].substring(1), procedure : d["DRG Definition"] }; });
    
    var means = {};

    for(var i = 0; i < dataset.length; i++) {
      var current = dataset[i];
      if(current.state in means) {
        means[current.state][0] += current.charges;
        means[current.state][1]++;
      } else {
        means[current.state] = [current.charges, 1];
      }
    }
    
    for(state in means) {
      means[state] = Math.round(means[state][0] / means[state][1]);
      $('.chart').append('<div class="bar ' + state + '"></div>');
      $('.' + state).height(Math.round(means[state] / 20)).append('<p>' + state + '</p>');
    }
    
  });

});