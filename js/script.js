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

  if (korttienMaara >= 1) {
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
  if (korttienMaara < 1) {
    nykyinenKortti.textContent = "No To-Do added! Add some below.";
    nykyinenKortti.style.color = "red";
    noppaTxT.textContent = "?";
    return;
  }
  
  else {
    nykyinenKortti.style.color = "white";
  }

  setTimeout(function () {
    const result = Math.floor(Math.random() * korttienMaara);
    noppaTxT.textContent = result + 1;
    nykyinenKortti.textContent = kortit[result];
    roll.disabled = false;
  }, 2600);
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
    //Stroke
    "#FFFFFF",
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
    //Stroke
    "#282A28",
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
    // Stroke
    "#AF8027",
  ],
  gold: [
    "#552000",
    "#F4C300",
    "#EBBA00",
    "#DDAC00",
    "#D09F00",
    "#BB8900",
    "#AB7800",
    "#8F5B00",
    "#703C00",
    "#632E00",
    // Stroken
    "#F6D200",
  ],
  silver: [
  "#27221F",
  "#AD9FA1",
  "#8B7F7E",
  "#6F6561",
  "#645B58",
  "#544D4A",
  "#484240",
  "#3C3735",
  "#312D2C",
  "#2C2826",
  // Stroken väri
  "#670F0D",
  ],
  dmc: [
    "#610102",
    "#1AC2C2",
    "#21A5A8",
    "#298186",
    "#32575F",
    "#393944",
    "#B70405",
    "#930304",
    "#820203",
    "#710203",
    // Stroken väri
    "#91A4C1",
  ],
  cyber: [
    "#000006",
    "#51BFDD",
    "#46A5C0",
    "#3D90A8",
    "#347A90",
    "#2B6578",
    "#214E5F",
    "#183947",
    "#0F242F",
    "#08131B",
    // Stroken väri
    "#FDF701", 
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
  const lastColor = colors[colors.length -1];

  polygons.forEach(function (polygon, index) {
    if (colors[index]) {
      polygon.setAttribute("fill", colors[index]);
    }
    polygon.setAttribute("stroke", lastColor);
  });
});
