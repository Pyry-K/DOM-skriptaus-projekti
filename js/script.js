const kortit = [];

//kortti = käyttäjän lähettämä form
const korttiForm = document.querySelector("#korttiForm");
const korttiInput = document.querySelector("#korttiInput");
const total = document.querySelector("#total");

// formin inputin validointi
korttiForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const kortti = korttiInput.value.trim();
  const vainKirjaimia = /^[a-öA-Ö ]+$/; // regular expression, joka sallii vain kirjaimia ja välilyöntejä

  if (kortti === "") {
    return;
  }
  // varmistaa, että käyttäjän syöte sisältää vain kirjaimia
  if (!vainKirjaimia.test(kortti)) {
    alert("Use only letters!");
    document.getElementById("korttiInput").style.color = "red";
    return;
  }
  // varmistaa, että käyttäjän syöte sisältää vähintään 3 merkkiä
  if (kortti.length < 3) {
    alert("Input must be at least 3 characters long!");
    document.getElementById("korttiInput").style.color = "red";
    return;
  }
  // pushaa käyttäjän syötteet listaan
  kortit.push(kortti);
  korttiInput.value = "";
  const korttienMaara = kortit.length;
  total.textContent = "Total items in list: " + korttienMaara;
});

// kun teksti kentään klikataan, teksin väri vaihtuu normaaliksi
korttiInput.addEventListener("focus", function () {
  document.getElementById("korttiInput").style.color = "white";
});

const roll = document.querySelector("#roll");
const noppaTxT = document.querySelector("#noppaTxT");
const nykyinenKortti = document.querySelector("#nykyinenKortti");
var audio2 = new Audio('./img/drumroll.mp3');

roll.addEventListener("click", function () {
  const korttienMaara = kortit.length;
  
  // nopan visuaaliset effektit, kuten liike ja tekstin vaihto. Nämä tapahtuu vain silloin jos käyttäjä on syöttänyt yhden To-Do:n
  if (korttienMaara >= 1) {
    audio2.play();
    document.getElementById("die-box").animate(
        [
          { rotate: "10deg" },
          { rotate: "-10deg" },
          { transform: "rotateX(-45deg)" },
          { transform: "rotateX(45deg)" },
          { transform: "rotateY(90deg)" },
          { transform: "rotateY(-90deg)" },
          { transform: "rotateZ(45deg)" },
          { transform: "rotateZ(-45deg)" },
        ],
        {
          duration: 1300,
          iterations: 2,
          direction: "alternate" 
        },
      nykyinenKortti.textContent = "???",  
      noppaTxT.textContent = "?",
      roll.disabled = true
    );
  }
  // varmistaa, että käyttäjä on syöttänyt edes yhden To-Do:n ennen kuin voi arpoa nopalla
  if (korttienMaara < 1) {
    nykyinenKortti.textContent = "No To-Do added! Add some below.";
    nykyinenKortti.style.color = "red";
    nykyinenKortti.style.textShadow = "1px 1px #f7f0f0";
    noppaTxT.textContent = "?";
    return;
  }
  
  // palauttaa tekstin värit normaaliksi
  else {
    nykyinenKortti.style.color = "white";
    nykyinenKortti.style.textShadow = "none";
  }

  // ajastin, joka paljastaa nopan numeron animaation loppuessa
  setTimeout(function () {
    const result = Math.floor(Math.random() * korttienMaara); 
    noppaTxT.textContent = result + 1;
    nykyinenKortti.textContent = kortit[result];
    roll.disabled = false;
  }, 2600);
});

// poista nappi nykyiselle kortille
const removeButton = document.querySelector("#removeButton");
removeButton.addEventListener("click", function(){
  index = kortit.indexOf(nykyinenKortti.textContent);
  if (index === -1) {
    alert("Nothing to remove! Roll again."); 
    return;
  }
  // poistaa nykyisen kortin listasta ja päivittää listan yhteensä luvun
  kortit.splice(index, 1);
  total.textContent = "Total items in list: " + kortit.length;
});

// nappien mouseover effekit päälle/pois
removeButton.addEventListener("mouseover", function(){
  removeButton.style.backgroundColor = 'red'
});

removeButton.addEventListener("mouseleave", function(){
  removeButton.style.backgroundColor = ''
});

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("mouseover", function(){
  submitBtn.style.backgroundColor = 'green'
})

submitBtn.addEventListener("mouseleave", function(){
  submitBtn.style.backgroundColor = ''
})