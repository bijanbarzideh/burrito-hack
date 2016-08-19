angular.module("Burritofy", [])
    .controller("BurritoController", ["$http", burritoCtrl])

function burritoCtrl($http) {
    var burr = this;
    burr.newOrder = {}

    burr.createOrder = function(orderData) {
        console.log(orderData);
        burr.newOrder = {}
        return $http.post("/order", orderData)
    }
}
