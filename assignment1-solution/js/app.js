(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkLunch = function () {
    $scope.message = checkLunchMenu($scope.lunchMenu);

    if ($scope.message == "Please enter data first") {
      $scope.msgStyle = {'color':'red'};
      $scope.boxStyle = {'border-color':'red'};
    } else {
      $scope.msgStyle = {'color':'green'};
      $scope.boxStyle = {'border-color':'green'};
    };
  };

  function checkLunchMenu(lunchMenu) {
    var l = lunchMenu.split(",").map(Function.prototype.call, String.prototype.trim).filter(Boolean).length;
    return l > 0 ? l > 3 ? "Too much!" : "Enjoy!" : "Please enter data first";
  };
}

})();
