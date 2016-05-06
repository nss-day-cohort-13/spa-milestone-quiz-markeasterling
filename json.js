var carLot = (function(carLot) {

function executeThisCodeAfterFileIsLoaded() {
	console.log(this.responseText);
}

function executeThisCodeIfXHRFails() {
	alert("loading failed");
}

var carLotObject = new XMLHttpRequest();
carLotObject.addEventListener("load", executeThisCodeAfterFileIsLoaded);
carLotObject.addEventListener("error", executeThisCodeIfXHRFails);

carLotObject.open("GET", "inventory.json");

carLotObject.send();



	return carLot;
}(carLot || {}));
