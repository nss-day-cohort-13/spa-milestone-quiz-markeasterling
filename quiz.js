// invokes the function to parse the JSON file and set the inventory
carLot.loadCarLotInventory();

// populates DOM with carLotInventory array, retreived from JSON file
insertCarsToDOM = function(carArray) {
  var mainContent = document.getElementById("container");
  for (var i = 0; i < carArray.length; i++)  {

   var cardContent = (
                  `<div class="card" id=${[i]} style = "border: 2px solid ${carArray[i].color}">` +
                  `<div> Make: ${carArray[i].make} </div>` +
                  `<div> Model: ${carArray[i].model} </div>` +
                  `<div> Year: ${carArray[i].year} </div>` +
                  `<div> Price: ${carArray[i].price} </div>` +
                  `<div> Color: ${carArray[i].color} </div>` +
                  `<div> Purchased: ${carArray[i].purchased} </div>` +
                  `<div class="description"> Description: ${carArray[i].description} </div></div>`
                 );

  mainContent.innerHTML += cardContent;
  };
//after DOM is loaded, this function is invoked, activating all needed events
  carLot.activateEvents();
};
