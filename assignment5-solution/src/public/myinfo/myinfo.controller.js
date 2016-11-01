(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['SignupService'];
function MyinfoController(SignupService) {
  var controller = this;
  controller.user = SignupService.getUser();
}


})();
