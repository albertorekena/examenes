"use strict";

const changeColor = e => {
  let letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let color = "#";

  for (let i = 0; i <= 5; i++) {
    color += letras[Math.floor(Math.random() * letras.length)];
  }

  e.target.style.backgroundColor = color;
}

document.body.addEventListener("dblclick", changeColor);