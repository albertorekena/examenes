"use strict";

const numeroFilas = 10;
const numeroColumnas = 10;
let contador = 1;

// Es creado todo lo que va a contener la equiqueta body: tanto el botón como la tabla
let tabla = "<button onClick='calcularNumerosPrimos()'>calcularNumerosPrimos</button><table>";
for (let i = 0; i < numeroFilas; i++) {
	tabla += "<tr>";

	for (let j = 0; j < numeroColumnas; j++) {
		// Se le añade el atributo "data-value" que será el que contenga el valor con el que se trabajará, y que coincide
		// con el que se muestra.
		tabla += `<td data-value=${contador}>${contador}</td>`;
		contador++;
	}

	tabla += "</tr>"
}
tabla += "</table>";

document.body.innerHTML = tabla;

function calcularNumerosPrimos() {
	const celdas = document.getElementsByTagName("td");

	// Se recorre toda la tabla y con la función "isPrimo" se añade la clase "is-primo" a los elementos que contienen
	// un número primo.
	for (let i = 0; i < celdas.length; i++) {
		if (isPrimo(celdas[i].dataset.value)) celdas[i].classList.add("is-primo");
	}
}

function isPrimo(numero) {
	let isPrimo = true;

	if (numero == 1) {
		isPrimo = false;
	}

	if (numero > 1) {
		// Se calcula la raíz cuadrada del número a averiguar si es primo, para ahorrar recursos de computación.
		const sqrtNumeroRedondeadoArriba = Math.floor(Math.sqrt(numero));

		for (let i = 2; i <= sqrtNumeroRedondeadoArriba && isPrimo; i++) {
			if (numero % i == 0) isPrimo = false; 
		}
	}

	return isPrimo;
}