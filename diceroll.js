let mainpageUrl = `main.html`;
if (!localStorage["planets"]) {
  let planets = [];
  for (let i = 0; i < 20; i++) {
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
    window.open("index.html", "_self");
  }, 500);

}