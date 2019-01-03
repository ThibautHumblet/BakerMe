// De code die ik hier heb gebruikt is allesbehalve efficient! Ik heb hier de focus gelegd op wat JS toe te voegen om wat duidelijk te maken binnen de functionaliteit
// van de website met het winkewagentje en het bestelformulier. Als we voor de taak ook JS moesten toevoegen, had ik mijn code properder en efficienter gemaakt.
// Hopelijk is het toch een meerwaarde dat ik de moeite heb gedaan om ervoor te zorgen dat mijn website géén WYSIWYG website is.
// Groetjes Thibaut Humblet

const standaardprijsbrood = 2.2 // op deze manier zijn alle prijzen het makkelijk  tegelijk aan te passen
const standaardprijskoffiekoek = 0.8 // idem hierboven

var prijsmeergranen = standaardprijsbrood;
var prijsachtkoek = standaardprijskoffiekoek;
var prijswitcarre = standaardprijsbrood;
var prijsbaguette = 1.6;
var prijsnutella = 3.1;
var prijseclair = standaardprijskoffiekoek;
var prijsgoudajong = 3.5;
var prijsvolkoren = standaardprijsbrood;
var prijsbresilienne = 4.2;
var prijscroissant = standaardprijskoffiekoek
var prijspuddingkoek = standaardprijskoffiekoek;
var prijssandwiches = 0.8;


function bestel(product) {
    var betereOutputType = product;

    switch (product) {
        case "meergranenbrood":
            prijs = prijsmeergranen;
            break;

        case "achtkoek":
            prijs = prijsachtkoek;
            break;

        case "witcarre":
            prijs = prijswitcarre;
            betereOutputType = "wit carré"
            break;

        case "baguette":
            prijs = prijsbaguette;
            break;

        case "nutella":
            prijs = prijsnutella;
            break;

        case "eclair":
            prijs = prijseclair;
            break;

        case "goudajong":
            prijs = prijsgoudajong;
            betereOutputType = "jonge gouda"
            break;

        case "volkorenbrood":
            prijs = prijsvolkoren;
            break;

        case "franbresilienne":
            prijs = prijsbresilienne;
            betereOutputType = "bresiliennetaart";
            break;

        case "croissant":
            prijs = prijscroissant;
            break;

        case "vierkantpudding":
            prijs = prijspuddingkoek;
            betereOutputType = "vierkante chocoladekoek"
            break;

        case "sandwiches":
            prijs = prijssandwiches;
            break;

        default:
            break;
    }

    var betereOutputPrijs = tweedecimalen(prijs) // methode tweedecimalen zorgt ervoor dat ik de prijs met een mooie string kan tonen

    var aantal = prompt("hoeveel " + betereOutputType + " wil je bestellen? (prijs: " + betereOutputPrijs + ")");
    // ik werk met cookies omdat dat de eenvoudigste en snelste manier is voor dit project. Bij grotere projecten kan er beter met een database/API gewerkt worden voor efficentere code.
    // Aangezien dit project sowieso al geen JS nodig heeft, maar ik dit gewoon wil voor wat functionaliteit te laten zien, doe ik het op deze manier.

    if (aantal != null) { // bugfix op het probleem als je een div aanklikte maar je drukte bij de promt op op cancel, kwam er null te staan in het winkelwagentje
        switch (product) {
            case "meergranenbrood":
                document.cookie = "aantalmeergranen=" + aantal;
                break;

            case "achtkoek":
                document.cookie = "aantalachtkoek=" + aantal;
                break;

            case "witcarre":
                document.cookie = "aantalwitcarre=" + aantal;
                break;

            case "baguette":
                document.cookie = "aantalbaguette=" + aantal;
                break;

            case "nutella":
                document.cookie = "aantalnutella=" + aantal;
                break;

            case "eclair":
                document.cookie = "aantaleclair=" + aantal;
                break;

            case "goudajong":
                document.cookie = "aantalgoudajong=" + aantal;
                break;

            case "volkorenbrood":
                document.cookie = "aantalvolkoren=" + aantal;
                break;

            case "franbresilienne":
                document.cookie = "aantalbresilienne=" + aantal;
                break;

            case "croissant":
                document.cookie = "aantalcroissant=" + aantal;
                break;

            case "vierkantpudding":
                document.cookie = "aantalpuddingkoek=" + aantal;
                break;

            case "sandwiches":
                document.cookie = "aantalsandwiches=" + aantal;
                break;

            default:
                break;
        }

    }
}

// een stuk code waar ik toch wel trots op ben om ervoor te zorgen dat er ook speciale tekens binnen de cookie gebruikt kunnen worden -> maatregel tegen SQL injection
// moest ik ooit een SQL database binnen deze website gebruiken
function getCookie(naamcookie) {
    var cookie = document.cookie.match('(^|;) ?' + naamcookie + '=([^;]*)(;|$)');
    return cookie ? cookie[2] : null;
}

function tweedecimalen(prijs) {
    var aantaldecimalen = prijs == parseInt(prijs, 10) ? 0 : 2; // met deze code zorg ik ervoor dat prijzen die normaal bv. 0.8 zijn, 0.80 worden
    return prijs = '€' + prijs.toFixed(aantaldecimalen);
}

function subrekening(aantal, prijs) {
    var subtotaal = aantal * prijs;
    return tweedecimalen(subtotaal);
}

function htmlsubtotaal(aantal, prijs) {
    return " Aantal: " + aantal + " x " + tweedecimalen(prijs) + " = " + subrekening(aantal, prijs);
}

function laadwinkelwagen() {
    var aantalmeergranen = getCookie("aantalmeergranen");
    var aantalachtkoek = getCookie("aantalachtkoek");
    var aantalwitcarre = getCookie("aantalwitcarre");
    var aantalbaguette = getCookie("aantalbaguette");
    var aantalnutella = getCookie("aantalnutella");
    var aantaleclair = getCookie("aantaleclair");
    var aantalgoudajong = getCookie("aantalgoudajong");
    var aantalvolkoren = getCookie("aantalvolkoren");
    var aantalbresilienne = getCookie("aantalbresilienne");
    var aantalcroissant = getCookie("aantalcroissant");
    var aantalpuddingkoek = getCookie("aantalpuddingkoek");
    var aantalsandwiches = getCookie("aantalsandwiches");


    var divsubmeergranen = document.getElementById('#submeergranen');
    var divsubactkoek = document.getElementById('#subachtkoek');
    var divsubwitcarre = document.getElementById('#subwitcarre');
    var divsubbaguette = document.getElementById('#subbaguette');
    var divsubnutella = document.getElementById('#subnutella');
    var divsubeclair = document.getElementById('#subeclair');
    var divsubgoudajong = document.getElementById('#subgoudajong');
    var divsubvolkoren = document.getElementById('#subvolkoren');
    var divsubbresilienne = document.getElementById('#subbresilienne');
    var divsubcroissant = document.getElementById('#subcroissant');
    var divsubpuddingkoek = document.getElementById('#subpuddingkoek');
    var divsubsandwiches = document.getElementById('#subsandwiches');

    if (aantalmeergranen == null) {
        document.getElementsByClassName('meergranen')[0].style.display = 'none';
    }
    else {
        divsubmeergranen.innerHTML += htmlsubtotaal(aantalmeergranen, prijsmeergranen);
    }

    if (aantalachtkoek == null) {
        document.getElementsByClassName('achtkoek')[0].style.display = 'none';
    }
    else {
        divsubactkoek.innerHTML += htmlsubtotaal(aantalachtkoek, prijsachtkoek);
    }

    if (aantalwitcarre == null) {
        document.getElementsByClassName('witcarre')[0].style.display = 'none';
    }
    else {
        divsubwitcarre.innerHTML += htmlsubtotaal(aantalwitcarre, prijswitcarre);
    }

    if (aantalbaguette == null) {
        document.getElementsByClassName('baguette')[0].style.display = 'none';
    }
    else {
        divsubbaguette.innerHTML += htmlsubtotaal(aantalbaguette, prijsbaguette);
    }

    if (aantalnutella == null) {
        document.getElementsByClassName('nutella')[0].style.display = 'none';
    }
    else {
        divsubnutella.innerHTML += htmlsubtotaal(aantalnutella, prijsnutella);
    }

    if (aantaleclair == null) {
        document.getElementsByClassName('eclair')[0].style.display = 'none';
    }
    else {
        divsubeclair.innerHTML += htmlsubtotaal(aantaleclair, prijseclair);
    }

    if (aantalgoudajong == null) {
        document.getElementsByClassName('goudajong')[0].style.display = 'none';
    }
    else {
        divsubgoudajong.innerHTML += htmlsubtotaal(aantalgoudajong, prijsgoudajong);
    }

    if (aantalvolkoren == null) {
        document.getElementsByClassName('volkoren')[0].style.display = 'none';
    }
    else {
        divsubvolkoren.innerHTML += htmlsubtotaal(aantalvolkoren, prijsvolkoren);
    }

    if (aantalbresilienne == null) {
        document.getElementsByClassName('bresilienne')[0].style.display = 'none';
    }
    else {
        divsubbresilienne.innerHTML += htmlsubtotaal(aantalbresilienne, prijsbresilienne);
    }

    if (aantalcroissant == null) {
        document.getElementsByClassName('croissant')[0].style.display = 'none';
    }
    else {
        divsubcroissant.innerHTML += htmlsubtotaal(aantalcroissant, prijscroissant);
    }

    if (aantalpuddingkoek == null) {
        document.getElementsByClassName('puddingkoek')[0].style.display = 'none';
    }
    else {
        divsubpuddingkoek.innerHTML += htmlsubtotaal(aantalpuddingkoek, prijspuddingkoek);
    }

    if (aantalsandwiches == null) {
        document.getElementsByClassName('sandwiches')[0].style.display = 'none';
    }
    else {
        divsubsandwiches.innerHTML += htmlsubtotaal(aantalsandwiches, prijssandwiches);
    }
}

function removeitem(cookie) {
    document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.reload();
}