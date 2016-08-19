angular.module('Burritofy', [])
	.controller('orderController',
		['$http',
		orderController])
	.factory('burritoFactory', burritoFactory);

	function orderController ($http) {
		var oCtrl = this;

		oCtrl.orders = [];
		console.log('ngcontroller')
		oCtrl.orderCreator = function(orderInfo){
			this.firstName = orderInfo.firstName || 'Roger';
			this.lastName = orderInfo.lastName || 'the Gray';
			this.streetAddress = orderInfo.streetAddress || '1838 Kickass Cir';
			this.city = orderInfo.city || 'Babylon';
			this.zipCode = orderInfo.zipCode || '90210';
			this.phone = orderInfo.phone || '8675309';
			this.orderType = orderInfo.orderType;

			oCtrl.orders.push(this);
			console.log(oCtrl.orders)
			// $('#deliveryModal').modal()
			// $('#burritoPicker').modal()

		}
		oCtrl.burritoArray = ['The Burrito to Conquer all Burritos', 'Meat Tornado', 'The CrossFit Disaster', 'The Asian Invasion', 'The Patti Mayonnaise']
		// oCtrl.burritoSelection = [];

			// oCtrl.submitOrder = (burritoInfo) => {
 	// 	oCtrl.submitOrder = function(burritoInfo){
		// 		oCtrl.burritoSelection.push(oCtrl.burritoArray[burritoInfo]);
		// 		console.log(oCtrl.burritoSelection)
		// 	}

		// oCtrl.chosenBurrito = "The Chosen Burrito"

		oCtrl.chosenBurrito = localStorage.getItem('burrito') || "The Chosen Burrito"

		oCtrl.submitOrder = function(burritoInfo) {
			localStorage.setItem('burrito', oCtrl.chosenBurrito = oCtrl.burritoArray[burritoInfo])
			// oCtrl.chosenBurrito = oCtrl.burritoArray[burritoInfo]
			return localStorage.getItem('burrito');


		}

	}




	function burritoFactory () {
		var bFac = this;




		return {
			burritoArray : burritoArray
		}
	}
