let ergstring = "";
if (!localStorage["planetIndex"]) {
  window.open('./index.html', '_self')
}

let planetIndex = JSON.parse(localStorage['planetIndex'])
generateCards();
function generateCards() {
  console.log([planetIndex])
  console.log([planetIndex].number)
  ergstring += `
                    <div class="gallerybackgroundContent${planetIndex}"> 
                    <div class="galleryallcontent${planetIndex}">
                    <div class="gallerycontent">
                    </div>
                    </div>
                    </div>
                    `
  document.getElementById('contentgenerate').innerHTML = ergstring
}