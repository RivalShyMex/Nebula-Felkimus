if (!localStorage["planets"]) {
  let planets = [];
  for (let i = 0; i < 20; i++) {
    planets.push(false)
  }
  localStorage["planets"] = JSON.stringify(planets);
}
  let planets = JSON.parse(localStorage["planets"]);
  let string = "";    
  for (let i = 1; i <= planets.length; i++) {
    if(planets[i]){
        string += `<img src="../images/planet${i}.png" onclick="openPlanet(${i})">`

    }    
  }
  document.getElementById("planets").innerHTML = string;
  function openPlanet(i){
        localStorage["planetindex"] = JSON.stringify(i);
        window.open("planet.html", "_self");
  }