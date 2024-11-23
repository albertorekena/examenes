"use strict";

document.body.addEventListener("mousemove", e => {
    document.getElementById("coordenadas").innerHTML = `(${e.clientX}, ${e.clientY})`;
  }
);