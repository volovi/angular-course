(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: MenuSearchDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function MenuSearchDirectiveController() {
  var list = this;

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.term = "";
  
  ctrl.getMatchedMenuItems = function() {
    if (!ctrl.term.length) { 
      ctrl.found = ""; 
      return;
    };

    var promise = MenuSearchService.getMatchedMenuItems(ctrl.term.toLowerCase());
    
    promise.then(function(result) {
      ctrl.found = result;
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  ctrl.removeItem = function(itemIndex) {
    console.log("'this' is: ", this);
    ctrl.found.splice(itemIndex, 1);
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result) {
      // process result and only keep items that match
      var foundItems = result.data.menu_items.filter(isMatchedMenuItem);
      // return processed items
      return foundItems;
    });
    
    function isMatchedMenuItem(value) {
      return value.description.indexOf(searchTerm) !== -1;
    }
  };

}

})();
