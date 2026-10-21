const kortit = [];

//kortti = käyttäjän lähettämä form
const korttiForm = document.querySelector("#korttiForm");
const korttiInput = document.querySelector("#korttiInput");
const total = document.querySelector("#total");

// formin inputin validointi, katsotaan onko se oikea tyyppi (vain kirjaimia) ja onko se oikean pituinen (min 3 merkkiä)
korttiForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const kortti = korttiInput.value.trim();
  const vainKirjaimia = /^[a-öA-Ö ]+$/; // regular expression, joka sallii vain kirjaimia ja välilyöntejä

  if (kortti === "") {
    return;
  }
  if (!vainKirjaimia.test(kortti)) {
    alert("Use only letters!");
    document.getElementById("korttiInput").style.color = "red";
    return;
  }
  if (kortti.length < 3) {
    alert("Input must be at least 3 characters long!");
    document.getElementById("korttiInput").style.color = "red";
    return;
  }

  kortit.push(kortti);
  korttiInput.value = "";
  const korttienMaara = kortit.length;
  total.textContent = "Total items in list: " + korttienMaara;
});

// kun teksti kentään klikataan, teksin väri vaihtuu "normaaliksi"
korttiInput.addEventListener("focus", function () {
  document.getElementById("korttiInput").style.color = "white";
});

const roll = document.querySelector("#roll");
const noppaTxT = document.querySelector("#noppaTxT");
const nykyinenKortti = document.querySelector("#nykyinenKortti");

roll.addEventListener("click", function () {
  const korttienMaara = kortit.length;

  document.getElementById("die-box").animate([
        { rotate: '5deg' },
        { rotate: '-5deg' }
    ], {
        duration: 100
    });  

  if (korttienMaara < 1) {
    nykyinenKortti.textContent = "No To-Do added! Add some below.";
    noppaTxT.textContent = "?";
    return;
  }

  const result = Math.floor(Math.random() * korttienMaara);
  noppaTxT.textContent = result + 1;
  nykyinenKortti.textContent = kortit[result];
});

// Skini menu

const customizationToggle = document.querySelector("#customizationToggle");
const customizationMenu = document.querySelector("#customizationMenu");

customizationToggle.addEventListener("click", function () {
  customizationMenu.hidden = !customizationMenu.hidden;
});

const backgroundColor = document.querySelector("#backgroundColor");
const diceColor = document.querySelector("#diceColor");
const boxColor = document.querySelector("#boxColor");
const textColor = document.querySelector("#textColor");
const polygons = document.querySelectorAll(".dice svg polygon");

const skins = {
  // Eka väri menee bg ja kuudes menee boxeihin
  blue: [
    "#1E6C9A",
    "#4ACBEE",
    "#47C6E9",
    "#45C1E5",
    "#3CAED4",
    "#36A0C8",
    "#3298C1",
    "#2C8BB5",
    "#267DA9",
    "#2274A1",
  ],

  purple: [
    "#302F6C",
    "#5F57D9",
    "#5C55D2",
    "#5952CB",
    "#554FC2",
    "#504BB7",
    "#4A46AA",
    "#434099",
    "#3D3A8A",
    "#38367E",
  ],

  green: [
    "#1B2C0B",
    "#FBE3B0",
    "#F2D9A7",
    "#E9CF9E",
    "#D3B887",
    "#939060",
    "#4B611C",
    "#415618",
    "#374B15",
    "#2A3C10",
  ],
};

backgroundColor.addEventListener("change", function () {
  document.documentElement.style.setProperty(
    "--color-background",
    backgroundColor.value,
  );
});

boxColor.addEventListener("change", function () {
  document.documentElement.style.setProperty("--color-box", boxColor.value);
});

textColor.addEventListener("change", function () {
  document.documentElement.style.setProperty("--color-text", textColor.value);
});

diceColor.addEventListener("change", function () {
  const colors = skins[diceColor.value];

  polygons.forEach(function (polygon, index) {
    if (colors[index]) {
      polygon.setAttribute("fill", colors[index]);
    }
  });
});
