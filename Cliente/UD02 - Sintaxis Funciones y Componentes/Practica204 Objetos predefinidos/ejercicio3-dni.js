"use strict";

const intv = setInterval(solicitarDni, 5000);
const relacionLetrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";
const dnis = [];

function solicitarDni() {
  const datoIntroducido = prompt("Por favor, introduce el Dni (-1 para terminar la operación): ");

  if (
    parseInt(datoIntroducido)
    && (datoIntroducido.length == 8 || parseInt(datoIntroducido) == -1)
  ) {
    const numeroDni = parseInt(datoIntroducido);
    let indiceLetra;

    if (numeroDni !== -1) {
      indiceLetra = numeroDni % 23;
      let letra = relacionLetrasDni[indiceLetra];
      dnis.push(numeroDni + letra);
    } else {
      clearInterval(intv);
      dnis.forEach(dni => console.log(dni));
    }
  } else {
    throw new Error("Introdujiste un dato incorrecto :(");
  }
}