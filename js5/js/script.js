// FOR LOOP
/*for(teller;conditie;wijziging (teller)){
    code
}*/
/*
var i = 1
for(i;i<=10;i++){
    console.log(i);
}
i = 1;
var x = 2;
for(i;i<=10;x){
    console.log(x);
    x = x + 2;
    i++;
}
*/
/*

var i=10;
for(i;i>=1;i--){
    console.log(i)
}
*/

/*
var text = "";
var i = 0;
while(i < 10){
    text = text + "<br> De nummers zijn " +i; //(tex += text)
    i++;
}
document.getElementById("demo").innerHTML = text;

*/

/*
var teller = 1;
var getal;
var resultaat=0;
var aantalGetallen = prompt("Geef het aantal getallen in");
for(teller; teller<=aantalGetallen; teller++){
    getal =parseInt(prompt("Geef het" + teller +" getal in "));
    resultaat = resultaat + getal;
}
console.log("De totale som van" + aantalGetallen + "getallen is " + resultaat);



*/

/*
var teller = 1;
var aantalGetallen= parseInt(prompt("Geef het aantal sterren in"));
var ster = "*";
var resultaat = "";
for(teller;teller<=aantalGetallen;teller++){
    resultaat = resultaat + ster
    console.log(resultaat);
}

for(teller;teller>0;teller--){
    console.log(resultaat.substr(0, teller))
}

*/

/*
var getal = parseInt(prompt("Geef een getal in"));
var fac = 1;
for(var i=1;i <= getal;i++){
    fac *=i;
}
console.log(fac);
*/
// oefening 5
/*var einde = "99";
var resultaat = "";
for(var i=0;i<=einde;i++){

    if(i<10){
        resultaat = resultaat + "0" + i + ",";
    }else{
        resultaat = resultaat + i + ",";
    }
}

console.log(resultaat.substring(0,resultaat.length-1));*/


/*
//oefening 6
var text = prompt("Geef tekst")
var karakter = prompt("Geeft karakter")
var i = 1
var aantal = 0
var o = 0

for(i;i<=text.length;i++){

    if(karakter==text.substring(o,i)){
        aantal++
        o++
    }else{
        o++
    }
}
console.log(aantal);

*/

//oefening 7
/*
var resultaat = "";
var getal = prompt("Geef een getal in");
console.log(getal);
for(var i=0;i<=getal;i++){
    if(i%2==0){
        resultaat = resultaat + i;
    }else{
    }
}
console.log(resultaat);
*/


//oefening 8

/*var getal = prompt("Geef een getal in");
var resultaat = "";
for(var i=1;i<=getal;i++){
    resultaat =

}*/

/*//oefening 9
var resultaat = "";
var getal = prompt("Geef een getal in");
for(var i = 1;i<=getal;i++){
    if(getal/)
}*/

//oefening 10
/*

var tafel = parseInt(prompt("Geef een tafel in"));
var eindGetal = parseInt(prompt("Geef een eindgetal in"));
var resultaat = "";
var x=1;

for(var i = 1;i<=eindGetal;i++){
    if(x<=3){
        resultaat = resultaat + tafel + "x" + i + "=" + tafel*i+",";
        x++;
    }else{
        console.log(resultaat);
        resultaat ="";
        x=1;
        i--;
    }
}
console.log(resultaat);
*/
//oefening 11


var aantalGetallen = prompt("Hoeveel getallen dienen er te worden weergegeven?");
var resultaat = "";
var x = 0;

for(var i = 1;i<=aantalGetallen;i++){
    resultaat = x + i;
    i = resultaat;
}
console.log(resultaat);

