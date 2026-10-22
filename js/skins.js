// # Kosmetiikat menu
// scriptit veivät niin paljon tilaa, että ne tehdään erikseen täälä

// Menun näyttämisen nappi ja menu
const customizationToggle = document.querySelector("#customizationToggle");
const customizationMenu = document.querySelector("#customizationMenu");

customizationToggle.addEventListener("click", function () {
  customizationMenu.hidden = !customizationMenu.hidden;
});

// taustan, nopan, boksien, tekstin ja nopan polygonien nimeäminen
const backgroundColor = document.querySelector("#backgroundColor");
const diceColor = document.querySelector("#diceColor");
const boxColor = document.querySelector("#boxColor");
const textColor = document.querySelector("#textColor");
const polygons = document.querySelectorAll(".dice svg polygon");

// itse kosmetiikat
const skins = {
// käyttöohjebet väreihin
  // Eka väri menee bg ja kuudes menee boxeihin. viimeinen on borderit eli svg:n stroke.
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
    // Stroke
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
    // Stroke
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
    // Stroke
    "#91A4C1",
    ],
  cyber: [
    "#000006",
    "#51BFDD",
    "#4db6d3",
    "#429ab2",
    "#47a5c2",
    "#A01919",
    "#112830",
    "#0b191f",
    "#09151c",
    "#060f15",
    // Stroke
    "#FDF701", 
    ],
  Girlypop: [
      "#EE6EA9",
      "#EE92D3",
      "#EE8DCE",
      "#EE89CA",
      "#EE85C6",
      "#EE82C2",
      "#EE7EBD",
      "#EE7AB8",
      "#EE76B3",
      "#EE72AE",
      // Stroke
      "#302430", 
    ],
  Cookie: [
    "#74492D",
    "#B49668",
    "#AC8D61",
    "#A5855B",
    "#9D7B54",
    "#97744E",
    "#916C48",
    "#8A6442",
    "#835B3B",
    "#7B5234",
    // Stroke
    "#593328", 
    ],
  Lex: [
    "#581429",
    "#303161",
    "#2A2B55",
    "#1E203C",
    "#181A2F",
    "#5F2343",
    "#A3253D",
    "#891F36",
    "#6E192F",
    "#63172C",
    // Stroke
    "#A66E4C", 
    ],
  Disco: [
    "#AB00D7",
    "#7A00FD",
    "#8000F8",
    "#8600F3",
    "#8D00EE",
    "#9400E9",
    "#9A00E4",
    "#9F00E0",
    "#A400DC",
    "#B200D2",
    // Stroken väri
    "#B0ABE1", 
    ],
  MostWanted: [
    "#6A2322",
    "#A8322E",
    "#A0302C",
    "#982E2A",
    "#912C29",
    "#8B2A28",
    "#842827",
    "#7A2625",
    "#732524",
    "#632120",
    // Stroken väri
    "#FFFFFF", 
    ],
};
// CSS muuttujien muokkaus

// tausta
backgroundColor.addEventListener("change", function () {
  document.documentElement.style.setProperty(
    "--color-background",
    backgroundColor.value,
  );
  // Jos taustan muuttaa valkoiseksi, se pakottaa tekstin samaan teemaan, jotta se näkyy
  if (backgroundColor.value === "#EDEDED") {
      textColor.value = "#BD262B";
      document.documentElement.style.setProperty("--color-text",
      textColor.value,
    );
  }
});

// boksit
boxColor.addEventListener("change", function () {
  document.documentElement.style.setProperty("--color-box",
    boxColor.value,
  );
});

// teksti
textColor.addEventListener("change", function () {
  document.documentElement.style.setProperty("--color-text",
    textColor.value,
  );
});

// Noppa eli polygonit
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
