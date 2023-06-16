let ergstring = "";
if (!localStorage["planetIndex"]) {
  window.open('./index.html', '_self')
}

let planetIndex = JSON.parse(localStorage['planetIndex'])
generateCards();
function generateCards() {
  console.log(characters[planetIndex])
  console.log(characters[planetIndex].number)
  ergstring += `
            <div id="charborder${planetIndex}>
            <div class="charborder${planetIndex}>
            <div class="charbackgroundContent${planetIndex}"> 
            <div class="charallcontent${planetIndex}"">
            <div class="charheader${planetIndex}">
            <img src="../images/${characters[planetIndex].picture}" class="charpictures${planetIndex}">
            <h1>${characters[planetIndex].name}</h1>
            <p>${characters[planetIndex].quote}</p>
            </div>
            <div class="charcontent${planetIndex}">
            <p>${characters[planetIndex].description}</p>
            <p>${characters[planetIndex].reasonwhyIlikechar}</p>
            </div>
            <div class="charlinks${planetIndex}">
            <a href="${characters[planetIndex].songthatfitsthem}" target="_onblank"><p>${characters[planetIndex].songthatfitsthemtext}</p></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            `
  document.getElementById('contentgenerate').innerHTML = ergstring
}