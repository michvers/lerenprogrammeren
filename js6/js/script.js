// DECLARATIE VARIABELEN
var cursisten = ["Tom", "tim", "Bart", "Els"];
var cursusJaar = [2017, 2018, 2019];

/*
var cursusJaar = new Array(2017, 2018, 2019);
*/

console.log(cursisten);
console.log(cursisten[2]);
console.log(cursisten.length);

console.log(cursusJaar);
console.log(cursusJaar[2]);
console.log(cursusJaar.length);

// cursist toevoegen
cursisten.push("Marieke");
console.log(cursisten);

// vooraan de array toevoegen
cursisten.unshift("Thomas");
console.log(cursisten);

// laatste item verwijderen in een array
cursisten.pop();
console.log(cursisten);

//
cursisten.shift();
console.log(cursisten.indexOf("Bart"));

cursisten.splice(2,1);
console.log(cursisten);

// loops en arrays
for(var i = 0;i<=cursisten.length;i++){
    console.log(cursisten[i]);
}
//document.getElementById("cursisten").innerHTML = cursisten[i];

//foreach
cursisten.forEach(element => console.log(element));

// LOOP:CONTINUE AND BREAK
var data = ["Tim", "Tom", 1980, 1973, "designer", "developer"];
for(var i =0;i<=data.length;i++){
    if(typeof data[i] === "string") continue;
    console.log(data[i]);
}

var data = ["Tim", "Tom", 1980, 1973, "designer", "developer"];
for(var i =0;i<=data.length;i++){
    if(typeof data[i] !== "string") break;
    console.log(data[i]);
}
