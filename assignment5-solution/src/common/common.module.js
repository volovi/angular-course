(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'http://res-srv-c5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
