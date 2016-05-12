var carLot = (function(events) {


activateEvents = function() {
	var textInput = document.getElementById("textInput");
	var purchaseButton = document.getElementById("purchaseButton");
	var description = document.querySelectorAll(".description");
	var cardID;
	var selectedDescription;

	changeSelectedDescription	= function() {
			//cardID = event.target.parentNode.id;
			var DescriptionToChange = description[cardID];

			//console.log(description[event.target.parentNode.id].innerHTML)
			//console.log("", cardID);
			//console.log(DescriptionToChange);
			//console.log("", `Description: ${textInput.value}`);
			DescriptionToChange.innerHTML = `Description: ${textInput.value}`;

			//textInput.addEventListener("keyup", function(){
			//});
	};

	focusTextInput = function() {
		var selectedCard = event.target.parentNode;
		cardID = event.target.parentNode.id;
		console.log("", cardID);
		if (selectedCard.className === "card") {
			textInput.focus();
			textInput.value = "";
			//cardID = event.target.parentNode.id;
			//console.log(cardID);
			//changeSelectedDescription();


			//carLot.toggleBorder();
		};




};
	console.log("events enabled")
document.getElementById("container").addEventListener("click", focusTextInput);
document.getElementById("container").addEventListener("click", carLot.toggleBorder);
textInput.addEventListener("keyup", changeSelectedDescription);
};

return events;

})(carLot || {});
