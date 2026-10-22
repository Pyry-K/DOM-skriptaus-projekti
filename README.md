# DOM-skriptaus-projekti -- ToDo noppa
Tekijät: Pyry Karvinen ja Valtteri Lipponen

# Projektisuunnitelma ja tulevaisuus
Projektin ideointi lähti käyntiin yksikertaisesta, mutta haastavasta ongelmasta: Miten saan asioita tehtyä?
Kaikilla on aina välillä tunne, että pitää tehdä paljon hommia, mutta ei osaa valita mistä aloittaisi. Kun kuluttaa tarpeeksi aikaa miettimiseen, niin sitten hommat jäävät jossain vaiheessa tekemättä kokonaan. Tätä arkista ja äärimmäisen turhauttavaa ongelmaa lähdimme sitten ratkaisemaan.

Laajensimme sitten tätä ongelmaa valinnan lisäksi motivaatioon. Mietimme, miten valitseminen saadaan ratkaistua ei vain tehokkaasti ja yksinkertaisesti, mutta myös mielekkäästi, jotta tekemisen voi aloittaa tehokkaasti.

Lopulta päädyimme valitsemisen vaikeudessa helppoon lopputulokseen. Mikä auttaa valitsemaan paremmin kuin ei valita ollenkaan?
Idea saada satunnainen valitsin yhdistettyä To Do listaan syntyi. Jos ei itse saa valittua, niin se on helppo ulkoistaa yksinkertaiselle koodille. Projekti syntyi myös eräänlaisena kannanottona tekoälyä vastaan, sillä niiden antama tulos, vaikka kuinka kysyisi, ei ole satunnainen.

Motivaatio ongelman päätimme ratkaista tekemällä listasta toimivan lisäksi myös mielekkään ja helppokäyttöisen. Keskeisin "mielekkyys ominaisuus", satunnaisuuden kuvastamisen lisäksi, on sivulla oleva noppa. Nopan tarkoitus on tuoda käyttäjälle pelihenkeä tekemiseen, jotta kaikista tylsimmätkin tehtävät saadaan tuntumaan, ainakin vähän vähemmän, työltä. Noppa myös toimi pohjana eri kosmetiikoille, mitkä ovat käyttäjälle valittavissa.Tällä hetkellä valittavissa on vain kolme eri väriteemaa, mutta näistä muodostuu jo 4116 eri vaihtoehtoa koko sivulle.

Tämän hetkinen "1.0" versio ei vielä hyödynnä suunniteltuja ominaisuuksia vielä täydessä mitassa, sillä ominaisuuksien skaala on pieni. Ne kuitenkin ovat kuitenkin porkkanana käyttää motivoimassa. Tulevia suunniteltuja ominaisuuksia ovat mm. uudet kosmetiikat ja saavutukset, jotka motivoivat käyttäjää entisestään tekemään annetut tehtävät, mutta myös palaamaan sovellukseen, ja kokeilemaan sen muita tulevia ominaisuuksia. Lisäksi myöhemmin tulevaisuudessa sovellusta on tarkoitus kaupallistaa maksullisilla kosmetiikoilla ja Battle Pass -idealla, joka varmistaa asiakkaiden palaamista ja luo eksklusiivisia kosmetiikkoja sovellusta eniten käyttäville.

Lisätietoja tulevista ominaisuuksista saa myöhemmin järjestettävässä esittely / julkaisu seminaarissa.

# Tarkoitus
Sovelluksen tarkoitus on helpottaa valinanvaikeutta sen käyttäjissä. Käyttäjiä ovat kaikki, ketkä haluavat piristää päivittäisten askareiden tekemistä helposti.

# Suunniteltuja (ja tässä versiossa toteutettuja) toimintoja:
1. Luo lista tehtäviä ja valitse niistä satunnainen.
2. Piristä ulkoasua ja käyttäjän mieltä kosmetiikoilla ja väriteemoilla.
3. Käytännössä, sovellusta voi myös hyödyntää tavallisena noppana.

# Rautalankamalli / luonnos

![alkuperäinen luonnos](image.png)

Luonnos on melko yksinkertainen ja joitaain toimintoja, kuten kosmetiikat, ei oltu vielä edes ajateltu.

# Verkkolinkit
- Julkaistu sovellus: Lisää tähän GitHub Pages -osoite (https://pyry-k.github.io/DOM-skriptaus-projekti/index.html)
- GitHub-repositorio: [Repositorion osoite](https://github.com/Pyry-K/DOM-skriptaus-projekti)
- Projektin videoesittely: Lisää tähän videon osoite

# Tietoja sovelluksesta
ToDo noppa on verkkosovellus, joka poistaa itkun ja hampaiden kiristyksen lisäksi muut mahdolliset ongelmat ja pelot tehtävien valitsemis prosessista.

Sovellus antaa sinun heittää noppaa, jonka tulos on yksi itse lisäämistäsi tehtävistä. Niistä valitaan sitten joka kerta yksi (nopan lukua vastaava) tehtävä, joka sitten voidaan merkitä tehdyksi.

# Teknologiat
Projekti ei ole teknologinen ihme. Käytössä on vain yksinkertaisimmat verkkosivun rakentamiseen vaadittavat kielet.

HTML – sivun rakenne
CSS – ulkoasu ja asettelu
JavaScript – toiminnallisuus, DOM-skriptaus ja lomakkeiden validointi

Erityistä huomioitavaa on svg:n käyttö nopan graafisessa muodostamisessta.

# Sovelluksen käyttöohjeet

1. Avaa sivu
2. Vieritä alas ja täytä kenttä, missä pyydetään lisäämään tehtävä.
3. Täytä tehtäviä haluttu määrä.
4. Klikkaa noppaa.
5. Tee tehtävä ja ole iloinen.

# Sovelluksen käynnistäminen paikallisesti
1. Kloonaa tai lataa tämä repositorio omalle koneellesi.
2. Avaa projektikansio.
3. Avaa index.html selaimessa.

# Kuvakaappaukset
Lisää tähän vähintään yksi kuvakaappaus toimivasta sovelluksestasi.
![Sovellus toiminnassa](image-1.png)

# Tunnetut virheet / puutteet
Ei tunnettuja virheitä.

# Työn jakautuminen

- Pyry: 
    - Frontend kehitys — Suurin osa HTML:stä, alkeelliset JavaScriptit, ja projektin GitHub vastaava.
    - UI/UX & Graphic Design — Graafiset elementit, Wireframet, CSS tyylit, ja yleinen visuaalinen ilme & esittely.
    - Kosmetiikka Design — Kosmetiikkojen ja visuaalisten teemojen räätälöinti.
    - Jatkokehityksen johto — Jatkokehitys, roadmap suunnittelu, ja projektin tulevaisuuden johtaminen.
- Valtteri:
    - JavaScript kehitys — Uusien JavaScript ominaisuuksien tekeminen ja olevien funktioiden hionta.
    - Frontend avustus — HTML lisääminen ja projektin rakenteen laajentamista.
    - Laadunvarmistus ja testaus — Ominasuuksien testaus, virheiden tunnistus ja ongelmien korjaaminen
    - Liike & Äänisuunnittelu — Animaatioiden luonti ja äänisuunnittelu.

# Oma arvio ja oppimisen reflektointi
Pohdi työtäsi ja oppimisprosessiasi.
- Pyry: 
    - Missä onnistuin? Visuaalinen ilme ja HTML toteutus onnistuivat eritysesti.
    - Mikä oli haastavaa? JavaScript oli haastavin osa.
    - Mitä parantaisin, jos aikaa olisi enemmän? Kosmetiikkojen jatkaminen (kts. upcoming features.txt)
    - Mitä opin HTML:stä, CSS:stä, JavaScriptistä ja DOM-skriptauksesta?
        - HTML:ssä uutta oli svg:n käyttö
        - CSS yleisen taitojen kehitys
        - JavaScriptissä CSS muuttujien muuttaminen. DOM taitojen kehitys.
    - Mikä jäi epäselväksi tai mistä haluaisin oppia lisää? DOM ja JavaScript yleisesti on heikoin puoleni.
    - Oma arvio projektista: 9/10 pistettä

- Valtteri:
    - Missä onnistuin? JavaScripti ja animaatiot on omasta mielestä hyvin onnistuneet.
    - Mikä oli haastavaa? Sanoisin JavaScript.
    - Mitä parantaisin, jos aikaa olisi enemmän? 3D d20-noppa animaatio, uusia JS ominaisuuksia kuten achievementit ja QoL
    - Mitä opin HTML:stä, CSS:stä, JavaScriptistä ja DOM-skriptauksesta?
        - HTML svg elementti oli täysin uusi asia.
        - CSS perustaitojen kehitys.
        - JS:ssä tuli käytettyä addEventListeneriä, jota en omissa projekteissa ole kauheammin käyttänyt. DOM taidot kehittyi.
    - Mikä jäi epäselväksi tai mistä haluaisin oppia lisää? CSS on kyllä minun heikkous.
    - Oma arvio projektista: 9/10 pistettä

# Lähteet ja kiitokset
Lähteet listattuna:
- https://www.w3schools.com/html/html5_svg.asp
- https://www.w3schools.com/css/css_font.asp
- https://sentry.io/answers/remove-specific-item-from-array/
- https://www.w3schools.com/css/css3_3dtransforms.asp

Käytetty tekoälytyökalu: ChatGPT

Miten työkalua käytettiin: Esimerkki miten svg:tä käytetään. Koodia ei kopioitu.



Kiitokset:

Projekti tiimin jäsenet - Ilman teitä ei olisi onnistuttu
Beta testaajat - Huippu tyyppejä apuna ja tukena läpi projektin
Suurena apuna graafisessa suunnittelussa - cssgradient.io ja figma color picker
ja sinä (käyttäjä).