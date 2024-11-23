"use strict";

import "./puntuacion-equipos.json";

// Carga de datos en node de un archivo json
const equipos = require("./puntuacion-equipos.json");

// Creo la función localizarEquipo aunque no la pide el enunciado, para no repetir código
function localizarEquipo(equipos, nombreEquipo) {
  // El primer equipo que tenga el "nombreEquipo" pasado como argumento, será devuelto por la función
  return equipos.find(eq => eq.nombreEquipo === nombreEquipo);
}

function imprimirPuntosEquipo(equipos, nombreEquipo) {
  console.log("Los puntos del equipo de " + nombreEquipo + " son: " + localizarEquipo(equipos, nombreEquipo).puntuacionEquipo.join(" - "));
}

function calcularPuntuacionMedia(puntos) {
  return (puntos.reduce((acc, puntos) => acc + puntos) / puntos.length).toFixed(2);
}

function imprimirPuntuacionMedia(equipos, nombreEquipo) {
  console.log("La puntuación media del equipo de " + nombreEquipo + " es: " + calcularPuntuacionMedia(localizarEquipo(equipos, nombreEquipo).puntuacionEquipo));
}

console.log("\n\n");
imprimirPuntosEquipo(equipos, "Juan");
imprimirPuntuacionMedia(equipos, "Juan");
imprimirPuntosEquipo(equipos, "Miguel");
imprimirPuntuacionMedia(equipos, "Miguel");
console.log("\n");
imprimirPuntosEquipo(equipos, "María");
imprimirPuntuacionMedia(equipos, "María");
console.log("\n\n");