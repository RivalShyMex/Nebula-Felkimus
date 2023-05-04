//const TOTAL_PLANETS = 20;
//const TOTAL_PLANETS = document.querySelectorAll('.planet').length;
let mainpageUrl = `main.html`;
if (!localStorage["planets"]) {
  let planets = [];
  for (let index = 0; index < 20; index++) {
    planets.push(false)
  }
  localStorage["planets"] = JSON.stringify(planets);
}
let planets = JSON.parse(localStorage["planets"]);
function RollDice() {
  let number = Math.floor(Math.random() * planets.length);

  planets[number] = true;
  console.log("click");
  localStorage["planets"] = JSON.stringify(planets);

  // Navigate to the main page
  setTimeout(() => {
    window.open("main.html", "_self");
  }, 500);

}
  /* console.log(`Unlocked planet number ${number}`);
 
// loop through the possible planet ids and find a match
 for (let i = 0; i < planetList.length; i++) {
   let planet = planetList[i];
 
   if (planet !== null) {
     if (number === i) {
       // Set the itemUnlocked value to true and save it in localStorage
       localStorage.setItem("itemUnlocked", true);
 
       // Hide all planets and show the unlocked planet
       //Might use this part of the code as well
       planetList.forEach((planetToHide) => {
         planetToHide.style.display = "none";
       });
       planet.style.display = "block";
 
       // Navigate to the planet page with the itemUnlocked parameter
       let url = `pages/planet${i + 1}.html?itemUnlocked=${i + 1}`;
       setTimeout(() => {
         window.location.href = url;
         console.log("Done!");
       }, 500);
 
       return number;
     }
   }
 }
}*/

/*const planetList = document.querySelectorAll('[id^="planet"]');

function isPlanetUnlocked(planetNumber) {
  let params = new URLSearchParams(window.location.search);
  return params.get('itemUnlocked') === `planet${planetNumber}`;
}

function RollDice() {
  let number = Math.floor(Math.random() * 20) + 1;
  console.log(`Unlocked planet number ${number}`);

  let planetId = `planet${number}`;
  let mainpageUrl = `main.html`;

  // Store the unlocked planet in localStorage
  localStorage.setItem('unlockedPlanet', planetId);

  // Navigate to the main page
  setTimeout(() => {
    window.location.href = mainpageUrl;
  }, 500);

  return number;
}

document.addEventListener("DOMContentLoaded", function () {
  function displayUnlockedPlanets() {
    let planetList = document.querySelectorAll('[id^="planet"]');
    let unlockedPlanet = localStorage.getItem('unlockedPlanet');

    planetList.forEach((planetElement) => {
      let planetNumber = planetElement.id.replace("planet", "");
      if (unlockedPlanet === `planet${planetNumber}`) {
        planetElement.style.display = "block";
      } else {
        planetElement.style.display = "none";
      }
    });
  }

  displayUnlockedPlanets();
});*/