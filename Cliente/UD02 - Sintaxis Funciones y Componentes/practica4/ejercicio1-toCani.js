"use strict";

function toCani(cadena) {
  let toCaniCadenaK = "";
  let toCaniCadenaMay = "";
  // Con numeroHs se obtiene un número entre 3 y 5
  const numeroHs = Math.ceil(Math.random() * 3) + 2;

  if (typeof cadena == "string") {
    for (let i = 0; i < cadena.length; i++) {
      toCaniCadenaK += (cadena[i] == "c" || cadena[i] == "C") ? "k" : cadena[i];
    }

    for (let i = 0; i < toCaniCadenaK.length; i++) {
      toCaniCadenaMay += (i % 2 == 0) ? toCaniCadenaK[i].toUpperCase() : toCaniCadenaK[i];
    }
  } else {
    throw new Error("El parámetro introducido en la función no es una cadena");
  }

  for (let i = 1; i <= numeroHs; i++) {
    toCaniCadenaMay += "H";
  }

  return toCaniCadenaMay;
}

console.log("\n\n");
console.log(toCani("una cadena cani es como esta"));
console.log("\n\n");