/*
var naam = prompt("Geef uw naam in");
var leeftijd = parseInt(prompt("Geef uw leeftijd in"));

console.log(naam);
console.log(leeftijd);

if(leeftijd > 18) {
console.log(naam + ", u mag deelnemen aan de trekking van de loterij");
}else if (leeftijd >= 16) {
console.log(naam + ", u mag mits toestemming van u ouders deelnemen aan de loterij");
} else {
    console.log(naam + ", u mag niet deelnemen aan de loterij");
}*/

/*var leeftijd = prompt("Wat is uw leeftijd?");
var aantalVakjes = prompt("Hoeveel vakjes wil je kopen?")

if (leeftijd >= 18) {
    if (aantalVakjes == 12) {
        console.log("De prijs is 20 euro");
    } else if (aantalVakjes == 2) {
        console.log("De prijs is 4 euro");
    } else if (aantalVakjes == 4) {
        console.log("De prijs is 8 euro");
    } else if (aantalVakjes == 6) {
        console.log("De prijs is 12 euro");
    } else if (aantalVakjes == 8) {
        console.log("De prijs is 16 euro");
    } else if (aantalVakjes == 10)
        console.log("De prijs is 18 euro");
} else {
    console.log(alert("U mag niet meedoen aan het spel"));
}*/
/*

var geboorteJaar = parseInt(prompt("Geef uw geboortejaar in"));
var lopendJaar = parseInt(prompt("Geef het lopen jaar in"));

if ((lopendJaar - geboorteJaar) >= 18) {
    console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
} else {
    console.log("Gelukkig heb ik mijn ouders die alles voor me regelen");
}
*/

// RUBRIEK ARRAYS


// OEFENING 1
/*
var getal = parseInt(prompt("Geef getallen in"));
var verschillendeGetallen = [];

while(getal>=0){
    verschillendeGetallen.push(getal);
    getal = parseInt(prompt("Geef getallen in"));
    console.log(getal);
}
console.log(verschillendeGetallen);

var hoeveelsteGetal = prompt("Hoeveelste getal wens je te zien");
var pos = verschillendeGetallen.indexOf(hoeveelsteGetal);
*/

// OEFENING 2

/*
var reeks1 = [];
var reeks2 = [];
var reeks3 = [];

for(var i = 0;i<=10;i++){
    console.log(i);
    reeks1.push(i) && reeks2.push(i);
}
console.log(reeks1, reeks2);

for(var i = 0;i<=10;i++){
    reeks3.push(reeks1[i] + reeks2[i]);
}
console.log(reeks3);
*/

// OEFENING 3

/*
var reeks1 = [];
var reeks2 = [];
var reeks3 = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(1000));

for(var i = 0;i<11;i++){
    console.log(i);
    reeks1[i] = getRandomInt(1000);
    reeks2[i] = getRandomInt(1000);
}

console.log(reeks1,reeks2);

for(var i = 0;i<=10;i++){
    reeks3.push(reeks1[i] + reeks2[i]);
    console.log(reeks1[i-1] + "+" + reeks2[i-1] + "=" + reeks3[i-1])
}
console.log(reeks3);


*/

// OEFENING 4
/*

var klasLijst = [];
var hoeveelNamen = parseInt(prompt("Hoeveel namen wil je ingeven"));

for(var i = 1;i<=hoeveelNamen;i++){
    var naam = prompt("Geef de naam in");
    klasLijst.push(naam);
    console.log(klasLijst);
}

*/

// OEFENING 5
/*

var kleineReeks = [];
var groteReeks = [];

for(var i = 97;i<=122;i++){
    kleineReeks.push(String.fromCharCode(i));
    groteReeks.push(String.fromCharCode(i-32));
}
console.log(kleineReeks, groteReeks);

*/

// OEFENING 6

/*
var kleineReeks = [];
var groteReeks = [];

for(var i = 97;i<=122;i++){
    kleineReeks.push(String.fromCharCode(i));
    groteReeks.push(String.fromCharCode(i-32));
}
*/

// OEFENING 7

/*
var reeks1 = [];
var reeks2 = [];
var reeks3 = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10));

for(var i = 0;i<10;i++){
    console.log(i);
    reeks1[i] = getRandomInt(10);
    reeks2[i] = getRandomInt(10);
    if(reeks1[i]%2 == 0){
        reeks3.push(reeks1[i]);
    }
    if(reeks2[i]%2 == 0){
        reeks3.push(reeks2[i]);
    }

}
console.log(reeks1, reeks2, reeks3);

*/

// OEFENING 8

