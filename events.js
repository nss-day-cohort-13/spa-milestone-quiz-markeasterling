var carLot = (function(events) {
	// all events are active when this function is invoked
	events.activateEvents = function() {
		console.log("events enabled");

	// put necessary DOM elements into variables
		var textInput = document.getElementById("textInput");
		var purchaseButton = document.getElementById("purchaseButton");
		var description = document.querySelectorAll(".description");
		var container = document.getElementById("container");
		var cardID;
		var selectedDescription;

	// funtion to edit description of selected card
		changeSelectedDescription	= function() {
				var DescriptionToChange = description[cardID];
				DescriptionToChange.innerHTML = `Description: ${textInput.value}`;
		};

	// function to
		focusTextInput = function() {
			var selectedCard = event.target.parentNode;
			cardID = event.target.parentNode.id;
			if (selectedCard.className === "card") {
				textInput.focus();
				textInput.value = "";
			};
	};

	container.addEventListener("click", focusTextInput);
	container.addEventListener("click", carLot.toggleBorder);
	textInput.addEventListener("keyup", changeSelectedDescription);
	};

	return events;

})(carLot || {});
