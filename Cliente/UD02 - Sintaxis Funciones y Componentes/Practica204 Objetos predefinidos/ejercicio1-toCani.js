"use strict";

function toCani(cadena) {
  let toCaniCadenaK = "";
  let toCaniCadenaMay = "";

  const numeroHs = Math.floor(Math.random() * 4) + 2;

  if (typeof cadena == "string") {
    for (let i = 0; i < cadena.length; i++) {
      toCaniCadenaK += (cadena[i] == "c" || cadena[i] == "C") ? "k" : cadena[i];
    }

    for (let i = 0; i < toCaniCadenaK.length; i++) {
      toCaniCadenaMay += (i % 2 == 0) ? toCaniCadenaK[i].toUpperCase() : toCaniCadenaK[i];
    }

    for (let i = 1; i <= numeroHs; i++) {
      toCaniCadenaMay += "H";
    }
  } else {
    throw new Error("El parámetro introducido en la función no es una cadena");
  }

  return toCaniCadenaMay;
}

console.log(toCani("una cadena cani es como esta"));