if (!localStorage["planets"]) {
  let planetsCollection = [];
  for (let i = 0; i < 20; i++) {
    planetsCollection.push(false)
  }
  localStorage["planets"] = JSON.stringify(planetsCollection);
}
  let planetsCollection = JSON.parse(localStorage["planets"]);
  console.log(localStorage["planets"]);
  let string = "";    
  for (let i = 0; i <= planetsCollection.length; i++) {
    if(planetsCollection[i]){
        string += `<img src="../images/planet${i}.png" onclick="openPlanet(${i})" class="movePlanets${i}" alt="planets">`

    } 
    else{
      string += `<div></div>`
    }   
  }
  document.getElementById("planets").innerHTML = string;
  function openPlanet(i){
        localStorage["planetIndex"] = JSON.stringify(i);
        document.getElementById("planets").style.cursor="pointer";
        window.open("planet.html", "_self");
  }

 /*let animation = anime({
    targets : "#solar_system",
    translateX : "100%",
    duration : 1000, 
    easing: "easeInOutQuad"
  });*/