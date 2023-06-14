let ergstring = "";
if (!localStorage["planetIndex"]) {
    window.open('./index.html', '_self')
  }

  let planetIndex = JSON.parse(localStorage['planetIndex'])
  generateCards();
function generateCards() {
            console.log(planets[planetIndex])
            console.log(planets[planetIndex].number)
            ergstring += `
                    <div class="backgroundContent${planetIndex}"> 
                    <div class="allcontent${planetIndex}">
                    <div class="header">
                    <img src="../images/${planets[planetIndex].logo}" alt="logo">
                    <p>${planets[planetIndex].developedby}</p>
                    <p>${planets[planetIndex].describedbyme}</p>
                    </div>
                    <div class="maincontent">
                    <p>${planets[planetIndex].description}</p>
                    <p>${planets[planetIndex].shortpartofplot}</p>
                    <p>${planets[planetIndex].review1}</p>
                    <p>${planets[planetIndex].review2}</p>
                    <p>${planets[planetIndex].review3}</p>
                    <iframe width="560" height="315" src="${planets[planetIndex].trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    </div>
                    </div>
                    `
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