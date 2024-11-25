"use strict";

// const equipos = require("./puntuacion-equipos.json");
// import equipos from "./puntuacion-equipos.json" with {type:"json"};
fetch("./puntuacion-equipos.json")
  .then(res => res.json())
  .then(datos => ejecutarEjercicio(datos));

function localizarEquipo(equipos, nombreEquipo) {
  return equipos.find(eq => eq.nombreEquipo === nombreEquipo);
}

function imprimirPuntosEquipo(equipos, nombreEquipo) {
  console.log("Los puntos del equipo de " + nombreEquipo + " son: " + localizarEquipo(equipos, nombreEquipo).puntuacionEquipo.join(" - "));
}

function calcularPuntuacionMedia(puntos) {
  return (puntos.reduce((acc, puntos) => acc + puntos, 0) / puntos.length).toFixed(2);
}

function imprimirPuntuacionMedia(equipos, nombreEquipo) {
  console.log("La puntuación media del equipo de " + nombreEquipo + " es: " + calcularPuntuacionMedia(localizarEquipo(equipos, nombreEquipo).puntuacionEquipo));
}

function ejecutarEjercicio(equipos) {
  imprimirPuntosEquipo(equipos, "Juan");
  imprimirPuntuacionMedia(equipos, "Juan");
  imprimirPuntosEquipo(equipos, "Miguel");
  imprimirPuntuacionMedia(equipos, "Miguel");
  imprimirPuntosEquipo(equipos, "María");
  imprimirPuntuacionMedia(equipos, "María");
}