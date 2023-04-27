let number;
let planet01 = document.getElementById("planet1");
let planet02 = document.getElementById("planet2");
let planet03 = document.getElementById("planet3");
let planet04 = document.getElementById("planet4");
let planet05 = document.getElementById("planet5");
let planet06 = document.getElementById("planet6");
let planet07 = document.getElementById("planet7");
let planet08 = document.getElementById("planet8");
let planet09 = document.getElementById("planet9");
let planet10 = document.getElementById("planet10");
let planet11 = document.getElementById("planet11");
let planet12 = document.getElementById("planet12");
let planet13 = document.getElementById("planet13");
let planet14 = document.getElementById("planet14");
let planet15 = document.getElementById("planet15");
let planet16 = document.getElementById("planet16");
let planet17 = document.getElementById("planet17");
let planet18 = document.getElementById("planet18");
let planet19 = document.getElementById("planet19");
let planet20 = document.getElementById("planet20");


function RollDice() {
    number = Math.floor(Math.random() * 20 + 1);

    if (number === parseInt(planet01.id.slice(-1))) {
        document.getElementById('planet1').style.display = "block"
        return number;
    }

    return number;

}

