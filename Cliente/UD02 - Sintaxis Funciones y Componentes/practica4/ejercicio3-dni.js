"use strict";

const intv = setInterval(solicitarDni, 5000);
const relacionLetrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";
const dnis = [];

function solicitarDni() {
  const numeroDni = parseInt(prompt("Por favor, introduce el Dni (-1 para terminar la operación): "));
  let indiceLetra;
  
  if (numeroDni !== -1) {
    // La letra se determina utilizando como índice en "relacionLetrasDni" el resto del número del Dni
    // entre 23 
    indiceLetra = numeroDni % 23;
    let letra = relacionLetrasDni[indiceLetra];
    dnis.push(numeroDni + letra);
  } else {
    // Una vez finalizada la introducción de datos, el intervalo es limpiado
    clearInterval(intv);
    dnis.forEach(dni => console.log(dni));
  }
}

solicitarDni();