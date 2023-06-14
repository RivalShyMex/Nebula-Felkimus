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
                    <p>'${planets[planetIndex].developedby}'</p>
                    <p>"${planets[planetIndex].describedbyme}"</p>
                    </div>
                    <div class="maincontent">
                    <p>${planets[planetIndex].description}</p>
                    <p>${planets[planetIndex].shortpartofplot}</p>
                    <p>"${planets[planetIndex].review1}"</p>
                    <p>"${planets[planetIndex].review2}"</p>
                    <p>"${planets[planetIndex].review3}"</p>
                    <iframe width="560" height="315" src="${planets[planetIndex].trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <img src="../images/${planets[planetIndex].picture1}">
                    <img src="../images/${planets[planetIndex].picture2}">
                    <img src="../images/${planets[planetIndex].picture3}">
                    <img src="../images/${planets[planetIndex].picture4}">
                    <img src="../images/${planets[planetIndex].picture5}">
                    <img src="../images/${planets[planetIndex].picture6}">
                    </div>
                    </div>
                    </div>
                    `
    document.getElementById('contentgenerate').innerHTML = ergstring
}