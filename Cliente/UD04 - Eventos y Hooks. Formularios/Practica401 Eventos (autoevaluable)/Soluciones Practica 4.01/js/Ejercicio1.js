"use strict";

let intervalo;

const go = () => {
  intervalo = setInterval(function () {
    let elemento = document.createElement("h1");
    elemento.innerHTML = texto;

    document.getElementById("h1").appendChild(elemento);

  }, 1000);
};

const stop = () => clearInterval(intervalo);

const reset = () => {
  stop();
  document.getElementById("h1").innerHTML = "";
};

const elementoComenzar = document.getElementById("comenzar");
const elementoParar = document.getElementById("parar");
const elementoReset = document.getElementById("reset");

elementoComenzar.addEventListener("click", go);
elementoParar.addEventListener("click", stop);
elementoReset.addEventListener("click", reset);