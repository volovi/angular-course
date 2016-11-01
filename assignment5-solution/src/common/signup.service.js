(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  // var user = {};

  service.getUser = function () {
    return service.user;
  }

  service.setUser = function (user) {
    service.user = user;
  }

  service.getFavoriteDish = function (menuNumber) {
    return $http.get(ApiPath + '/menu_items/' + menuNumber + '.json').then(function (response) {
      return response.data;
    });
  };

}



})();
