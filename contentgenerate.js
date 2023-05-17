let ergstring = "";
if (!localStorage["planetIndex"]) {
    window.open('./index.html', '_self')
  }

  let planetIndex = JSON.parse(localStorage['planetIndex'])
  generateCards();
function generateCards() {
            console.log(planets[planetIndex])
            ergstring += `<div class="header">
                    <p>${planets[planetIndex].name}</p>
                </div>`
    document.getElementById('contentgenerate').innerHTML = ergstring
}

/*function filterCards() {
    counter = 0;
    let filter = document.getElementById('attributeFilter').value;
    if(filter == "all"){
        ergstring = "";
        generateCards();
    }else{
        ergstring = "";
        ergstring += `<div class= column>`
        for (let index = 0; index < digimons.length; index++) {
            if(filter == digimons[index].attribute){
                        ergstring += `<div class="card">
                            <div class="name">
                            <p>${digimons[index].name}</p>
                            </div>
                            <div class="infos">
                                <div id="picture">
                                
                                 <img src="./img/${digimons[index].picture}">
                                  
                                </div>
                                <div class="texts">
                                  <div class="data">
                                    <div>
                                    <p>Level: </p> 
                                        <p>${digimons[index].level}</p>    
                                    </div>
                                    <div>
                                        <p>Type: </p> 
                                        <p>${digimons[index].type}</p>
                                    </div>
                                    <div>
                                        <p>Attribute: </p>
                                        <p>${digimons[index].attribute}</p>
                                    </div>
                                  </div>   
                                 <div class="specialMoves">
                                    <p>Special moves:</p>
                                    <p>${digimons[index].specialMove}</p>
                                 </div>
                                 <div class="profile">
                                    <p>Profile: ${digimons[index].profile}</p>
                                 </div>
                                 </div>
                                </div>
                            </div>`
                        counter++
            }
        }
        ergstring += `</div>`
        document.getElementById('contentgenerate').innerHTML = ergstring
    }
}*/