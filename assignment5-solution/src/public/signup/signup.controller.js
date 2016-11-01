(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var controller = this;
  controller.user = SignupService.getUser();
  
  controller.submit = function () {
  	var promise = SignupService.getFavoriteDish(controller.user.menuNumber);

  	promise.then(function (response) {
  	  controller.success = controller.completed = true;
   	  controller.user.favoriteDish = response;
	  SignupService.setUser(controller.user);
 	}).catch(function(error) {
 	  controller.success = !(controller.completed = true);
      controller.user.menuNumber = "";
    });
  };
}

})();
