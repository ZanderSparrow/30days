var isPrime = function(n) {
  n = Math.abs(n);
  var maxCheck = Math.ceil(Math.sqrt(n));

  if(n <= 2) {
    return true;
  } else if(n % 2 === 0) {
    return false;
  } else {
    var foundFactor = false;
    for(var i = 3; i <= maxCheck; i += 2) {
      if(n % i === 0) {
        foundFactor = true;
      }
    }
    return !foundFactor;
  }
}

var primeFactors = function(n) {
  n = Math.abs(n);
  var facts = [];
  var factorNum = function(x) {
    if(isPrime(x)) {
      facts.push(x);
    } else {
      for(var i = 2; i <= Math.ceil(Math.sqrt(x)); i++) {
        if(x % i === 0) {
          facts.push(i);
          factorNum(x / i);
          break;
        }
      }
    }
  }
  factorNum(n);
  return facts;
}

var nthPrime = function(n) {
  counter = 0;
  var currentN = 1;
  while(counter < n) {
    currentN++;
    if(isPrime(currentN)) {
      counter++;
    }
  }
  return currentN;
}

$(function() {
  $('#10001 p').text('The 10001th prime: ' + nthPrime(10001));

  $('#encrypt-form form').submit(function(event) {
    $('.result ul').text("");
    var inNumber = $('input#number').val();
    var numIsPrime = isPrime(inNumber);
    var factors = primeFactors(inNumber);

    if(numIsPrime) {
      $('.result ul').append('<p>' + inNumber + " is a prime number!</p>");
    } else {
      //add all its factors
      $('.result ul').append('<p>' + inNumber + " has the following prime factors:</p>");
      $('.result ul').append('<ul></ul>');
      factors.forEach(function(factor) {
        $('.result ul ul').append('<li>' + factor + '</li>');
      });
    }

    

    event.preventDefault();
    $('.result').show();
    //Clear the field
    $('input#number').val('');
  });
});