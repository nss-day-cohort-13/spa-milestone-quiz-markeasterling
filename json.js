var carLot = (function(inventory) {
  carLotInventory = [];
  var mainContent = document.getElementById("container");

  //function that creates cards from carLotInventory
  inventory.insertCarsToDOM = function() {
    for (var i = 0; i < carLotInventory.length; i++)  {

     cardContent = (
                    `<div class="card" id=${[i]} style = "border: 2px solid ${carLotInventory[i].color}">` +
                    `<div> Make: ${carLotInventory[i].make} </div>` +
                    `<div> Model: ${carLotInventory[i].model} </div>` +
                    `<div> Year: ${carLotInventory[i].year} </div>` +
                    `<div> Price: ${carLotInventory[i].price} </div>` +
                    `<div> Color: ${carLotInventory[i].color} </div>` +
                    `<div> Purchased: ${carLotInventory[i].purchased} </div>` +
                    `<div class="description"> Description: ${carLotInventory[i].description} </div></div>`
                   );

    mainContent.innerHTML += cardContent;
    };
  };


  inventory.setCarLotInventory = function(cars)  {
    carLotInventory = cars;
  };

  inventory.getCarLotInventory = function() {
    return carLotInventory;
    console.log(carLotInventory);
  };

  function executeThisCodeAfterFileIsLoaded() {
    //console.log(this.responseText);
    var cars = JSON.parse(this.responseText).cars;
    inventory.setCarLotInventory(cars);
    inventory.insertCarsToDOM();
    carLot.activateEvents();
  };

  var carLotObject = new XMLHttpRequest();
  carLotObject.addEventListener("load", executeThisCodeAfterFileIsLoaded);
  carLotObject.addEventListener("error", function() {
    console.log("error");
  });

  carLotObject.open("GET", "inventory.json");
  carLotObject.send();

  return inventory;

})(carLot || {});
