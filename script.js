let itemUnlocked = localStorage.getItem("itemUnlocked");
let planetIds = [];

// generate all planet ids and store them in an array
for (let i = 1; i <= 20; i++) {
  planetIds.push(`planet${i}`);
}

document.addEventListener('input', function(ev) {
  if (ev.target && ev.target.closest) {
    let container = ev.target.closest('.form-group');
    // rest of the code
  }
});

function RollDice() {
  let number = Math.floor(Math.random() * 20 + 1);

  // loop through the array of planet ids and find a match
  for (let i = 0; i < planetIds.length; i++) {
    let planet = document.getElementById(planetIds[i]);

    if (planet !== null) {
      if (number === parseInt(planet.id.slice(-1))) {
        if (itemUnlocked === "true") {
          console.log(`Unlocked planet number ${number}`)
          localStorage.setItem("itemUnlocked", true);
        }

        planet.style.display = "block";
        let url = `${planetIds[i]}.html?itemUnlocked=true`;
        window.location.href = url;

        return number;
      }
    }
  }
}