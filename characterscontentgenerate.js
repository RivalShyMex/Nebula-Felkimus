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
            <div class="charbackgroundContent${planetIndex}"> 
            <div class="charallcontent${planetIndex}">
            <div class="charheader">
            <img src="../images/${characters[planetIndex].picture}">
            <p>${characters[planetIndex].quote}</p>
            </div>
            <div class="charcontent">
            <p>${characters[planetIndex].description}</p>
            <p>${characters[planetIndex].reasonwhyIlikechar}</p>
            </div>
            </div>
            </div>
            `
  document.getElementById('contentgenerate').innerHTML = ergstring
}