var app = angular.module('bandt', []);

app.controller('bandtController', function($scope){
  $scope.showBill = false;
  $scope.showTed = false;
  $scope.noPeople = true;

  $scope.toggleBill = function(){
    $scope.showBill = !$scope.showBill;
    $scope.showTed = false;
    $scope.noPeople = false;
    $scope.billScore.points += 1;
    $scope.checkScore();
  };

  $scope.toggleTed = function(){
    $scope.showTed = !$scope.showTed;
    $scope.showBill = false;
    $scope.noPeople = false;
    $scope.tedScore.points += 1;
    $scope.checkScore();
  };

  $scope.endMatch = function() {
    $scope.showBill = false;
    $scope.showTed = false;
    $scope.noPeople = true;
    $scope.billScore.points = 0;
    $scope.tedScore.points = 0;
  };

  $scope.checkScore = function(){
    if ($scope.billScore.points > $scope.tedScore.points) {
      return 'bill';
    } else if ($scope.tedScore.points > $scope.billScore.points) {
      return 'ted';
    } else {
      return 'booth';
    }
  };

  $scope.billScore = { points: 0};
  $scope.tedScore = { points: 0};

  $scope.newGame = function(){
    if ( $scope.billScore.points === 0 && $scope.tedScore.points === 0 ) {
      return false;
    } else {
      return true;
    }
  };
});
