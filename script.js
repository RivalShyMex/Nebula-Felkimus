let number;
let planetId;
let planet;

function RollDice() {
    number = Math.floor(Math.random() * 20 + 1);
    planetId = `planet${number}`;
    planet = document.getElementById(planetId);
    let input = document.getElementById("planet1");
    let rect = input.getBoundingClientRect();

    for (let index = 0; index <= 20; index++) {
        console.log(number);

        if (planet !== null) {
            if (number === parseInt(planet.id.slice(-1))) {
                if (itemUnlocked === "true") {
                    localStorage.setItem("itemUnlocked", true);
                    console.log(`Unlocked planet number ${number}`)
                }
                
                planet.style.display = "block"
                let itemUnlocked = localStorage.getItem("itemUnlocked");
                let url1 = "planet1.html?itemUnlocked=true";
                let urlParams = new URLSearchParams(window.location.search);
                itemUnlocked = urlParams.get("itemUnlocked");
                localStorage.setItem("ItemUnlocked", true);
                window.location.href = url1;
              
                return number;
            }
        }
    }
}

