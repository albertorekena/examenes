"use strict";

import {mostrarContenido} from "./Biblioteca.js";

const elementos = document.getElementsByClassName("elemento");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", e => mostrarContenido(e.target.nextElementSibling.classList.toggle("oculto")));
}