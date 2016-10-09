(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  //List of Shopping items
  var toBuy = [{ name: "bags of cookies", quantity: 10 }, 
               { name: "bags of chips", quantity: 6 },
               { name: "bottles of milk", quantity: 3 }, 
               { name: "bottles of soda", quantity: 4 },
               { name: "bottles of Pepto Bismol", quantity: 2 }];

  var bought = [];

  service.buyItem = function (itemIndex) {
    var boughtItem = toBuy.splice(itemIndex, 1)[0];
    bought.push(boughtItem);
  };

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };

}


})();
