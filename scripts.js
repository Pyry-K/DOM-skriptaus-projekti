function naytaLista() {
    document.getElementById("lista").style.display = "block";
    document.getElementById("tiedot").style.display = "none";
    document.getElementById("mukana").style.display = "none";
}

function naytaLounas() {
    document.getElementById("otsikko").innerHTML = "Lounas";
    document.getElementById("paikka").innerHTML = "Pasilan ravintola";
    document.getElementById("aika").innerHTML = "tänään 12:15";
    document.getElementById("paikat").innerHTML = "2 paikkaa vapaana";
    document.getElementById("kuvaus").innerHTML = "Mennään syömään, saa tulla mukaan. Tarkoitus syödä rauhassa ja jatkaa päivää pirteänä!";
    document.getElementById("lista").style.display = "none";
    document.getElementById("tiedot").style.display = "block";
}

function naytaOpiskelu() {
    document.getElementById("otsikko").innerHTML = "Opiskelu";
    document.getElementById("paikka").innerHTML = "Kirjasto";
    document.getElementById("aika").innerHTML = "tänään 13:00";
    document.getElementById("paikat").innerHTML = "1 paikka vapaa";
    document.getElementById("kuvaus").innerHTML = "Kerrataan huomista tenttiä varten. Kaikki tervetulleita!";
    document.getElementById("lista").style.display = "none";
    document.getElementById("tiedot").style.display = "block";
}

function naytaTauko() {
    document.getElementById("otsikko").innerHTML = "Tauko";
    document.getElementById("paikka").innerHTML = "Kahvila";
    document.getElementById("aika").innerHTML = "tänään 14:00";
    document.getElementById("paikat").innerHTML = "3 paikkaa vapaana";
    document.getElementById("kuvaus").innerHTML = "Käydään kahvilla aulassa. Saa liittyä mukaan ihan vapaasti.";
    document.getElementById("lista").style.display = "none";
    document.getElementById("tiedot").style.display = "block";
}

function naytaKayvely() {
    document.getElementById("otsikko").innerHTML = "Liikunta / Kävely";
    document.getElementById("paikka").innerHTML = "Pasilan puisto";
    document.getElementById("aika").innerHTML = "tänään 16:15";
    document.getElementById("paikat").innerHTML = "2 paikkaa vapaana";
    document.getElementById("kuvaus").innerHTML = "Kevyt happihyppely puiston ympäri luentojen jälkeen.";
    document.getElementById("lista").style.display = "none";
    document.getElementById("tiedot").style.display = "block";
}

function naytaMukana() {
    document.getElementById("tiedot").style.display = "none";
    document.getElementById("mukana").style.display = "block";
}