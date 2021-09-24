// 1.

/*
var zin = prompt("Geef een zin in");
var zinHoofdLetters = zin.toUpperCase()
console.log(zinHoofdLetters);
*/


// 2.

/*
var beginGetal = parseInt(prompt("Geef een begingetal in"));
var eindGetal = parseInt(prompt("Geef een eindgetal in"));
var resultaat = "1";


for(var i = beginGetal;i<=eindGetal;i++){
    resultaat = resultaat * i
}
console.log(resultaat);
*/


// 3.

var eindGetal = parseInt(prompt("Geef een getal in"));
resultaat = "";

for(var i = 1;i<=eindGetal;i++) {
    if(resultaat%2 == 1){
        resultaat = resultaat + "+" + i;
    }else if(resultaat%2 == 0) {
        resultaat = resultaat + "-" + i;
    }
}
console.log(resultaat);



// 4.
/*

var zin = prompt("Geef een zin in");

var aantalKarakters = zin.split(" ").join("").length;
var aantalWoorden = zin.match(/(\w+)/g).length;

console.log("Aantal karakters: " + aantalKarakters);
console.log("Aantal woorden: " + aantalWoorden);

*/

// 5.
/*
var reeks1 = [];
var reeks2 = [];
var resultaat = "";
var hulp = 1;

for (var i=0; i<=10;i++){
    resultaat = 2**i;
    reeks1.push(resultaat);
    reeks2.push(resultaat*2);
    console.log(resultaat);
}

console.log(reeks1);
console.log(reeks2);*/




// 6.
/*

var str = prompt("Geef een string in");

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("full stack developers"));
*/
