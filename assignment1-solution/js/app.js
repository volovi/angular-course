(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkLunch = function () {
    $scope.message=checkLunchMenu($scope.lunchMenu);
  };

  function checkLunchMenu(lunchMenu) {
    var l = lunchMenu.split(",").filter(Boolean).length;
    return l > 0 ? l > 3 ? "Too much!" : "Enjoy!" : "Please enter data first";
  };
}

})();
