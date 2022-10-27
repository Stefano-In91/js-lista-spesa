"use strict";

// Data una lista della spesa
const groceryList = [
   "Pane",
   "Acqua",
   "Proteine",
   "CoseACaso",
   "Caramelle",
   "Cinghiale"
];
const listLength = groceryList.length;
// Lista su cui stampare
const ul = document.getElementById("grocery-list");
// Ciclo di stampa
let i = 0;
while (i < listLength) {
   const li = document.createElement("li");
   ul.append(li);
   li.innerHTML = groceryList[i++];
}
