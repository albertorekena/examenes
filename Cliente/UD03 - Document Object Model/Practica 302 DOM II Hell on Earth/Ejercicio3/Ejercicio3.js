"use strict";

function desaparecer(parrafo) {
	parrafo.classList.add("desaparecido");
}

function cambiarColorFondo(parrafo) {
	// Con replace, una expresión regular y la transformación de un número aleatorio en hexadecimal toString(16),
	// se crea un color aleatorio
	let color = "#000000".replace(/0/g, () => (Math.floor(Math.random() * 16)).toString(16));

	parrafo.style.backgroundColor = color;
}