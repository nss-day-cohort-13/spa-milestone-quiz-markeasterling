var carLot = (function(toggle) {

//thickens border and adds a different color to clicked card, providing a
//selected effect.
toggle.toggleBorder = function() {
	if (event.target.parentNode.className === "card" || "selected") {
		event.target.parentNode.classList.toggle("selected");
	};
};

return toggle;

})(carLot || {});
