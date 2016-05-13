var carLot = (function(carLot) {

carLot.toggleBorder = function() {
	if (event.target.parentNode.className === "card" || "selected") {
		event.target.parentNode.classList.toggle("selected");
		//focusTextInput();
	};
};

return carLot;

})(carLot || {});
