(function() {
  var toDo = angular.module('toDo', []);

  toDo.controller('ToDoCtrl', function ToDoCtrl($scope) {
    $scope.items = [];
    $scope.addItem = function() {
      $scope.items.push({ action: $scope.listItem });
      $scope.listItem = null;
    };
    
    $scope.delete = function(item) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
    };
  });
})();

  