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

var teller = 1;
var aantalGetallen= parseInt(prompt("Geef het aantal sterren in"));
var ster = "*";
var resultaat = "";
for(teller;teller<=aantalGetallen;teller++){
    resultaat = resultaat + ster
    console.log(resultaat);
}


console.log(resultaat.substr(0,4));

for(teller; teller>=aantalGetallen;teller--){
    resultaat = resultaat - ster;
    console.log(resultaat);
}












