var carLot = (function(carLot) {
//document.querySelector("#container").addEventListener("click", carLot.toggleBorder);

carLot.toggleBorder = function() {
	if (event.target.parentNode.className === "card" || "selected") {
		event.target.parentNode.classList.toggle("selected");
		focusTextInput();
		//console.log("yes, that's card");
	//console.log(event.target.parentNode);
	// }  else if (event.target.parentNode.className === "selected") {
	// 	console.log("not card");
	// 	event.target.parentNode.classList.toggle("selected");
	// } else {

	};


};
	return carLot;

})(carLot || {});
