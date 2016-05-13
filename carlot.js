var carLot = (function(){

// where parsed JSON information is stored
var carLotInventory = [];

	return {
	//function to get carLotInventory
		getCarLotInventory: function(){
			return carLotInventory;
		},

	// function that requests the JSON file, and adds parsed information into
	// an array that can be used when populating the DOM
		loadCarLotInventory: function(){
			var carLotObject = new XMLHttpRequest();
			carLotObject.addEventListener("load", function() {
			var carLotInventory = JSON.parse(this.responseText).cars

			insertCarsToDOM(carLotInventory);
			});

			carLotObject.open("GET", "inventory.json");
			carLotObject.send();
		}

	}

})();
