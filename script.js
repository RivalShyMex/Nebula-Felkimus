const TOTAL_PLANETS = 20;
let itemUnlocked = localStorage.getItem("itemUnlocked");

document.addEventListener('input', function(ev) {
  if (ev.target && ev.target.closest) {
    let container = ev.target.closest('.form-group');
    // rest of the code
  }
});

function RollDice() {
  let number = Math.floor(Math.random() * TOTAL_PLANETS + 1);


  console.log(number);


  // loop through the possible planet ids and find a match
  for (let i = 1; i <= TOTAL_PLANETS; i++) {
    let planet = document.getElementById(`planet${i}`);

    if (planet !== null) {
      if (number === i) {
        if (itemUnlocked === "true") {
          console.log(`Unlocked planet number ${number}`)
          localStorage.setItem("itemUnlocked", true);
        }

        planet.style.display = "block";
        let url = `planet${i}.html?itemUnlocked=true`;
        window.location.href = url;

        return number;
      }
    }
  }
}
