"use strict";

let imgBolaPapel = document.getElementById("bola-papel");
let elementoAgarrado;

imgBolaPapel.setAttribute("draggable", true);

imgBolaPapel.addEventListener("dragstart", e => elementoAgarrado = e.target);

let divPapelera = document.getElementById("div-papelera");
divPapelera.addEventListener("dragover", e => e.preventDefault());
divPapelera.addEventListener("drop", e => {
  e.preventDefault();

  if (e.target.id == "papelera") {
    e.target.setAttribute("src", "./img/llena.jpg");
    elementoAgarrado.remove();
  }
});

document.getElementById("papelera").addEventListener("dblclick", e => {
  if (e.target.getAttribute("src") == "./img/llena.jpg") {
    e.target.setAttribute("src", "./img/vacia.jpg");
    document.body.appendChild(imgBolaPapel);
  }
});