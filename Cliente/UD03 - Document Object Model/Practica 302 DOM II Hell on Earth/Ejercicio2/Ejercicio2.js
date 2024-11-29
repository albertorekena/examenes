"use strict";

const numeroFilas = 10;
const numeroColumnas = 10;
let contador = 1;

let tabla = "<button onClick='calcularNumerosPrimos()'>calcularNumerosPrimos</button><table>";
for (let i = 0; i < numeroFilas; i++) {
	tabla += "<tr>";

	for (let j = 0; j < numeroColumnas; j++) {
		tabla += `<td data-value=${contador}>${contador}</td>`;
		contador++;
	}

	tabla += "</tr>"
}
tabla += "</table>";

document.body.innerHTML = tabla;

function calcularNumerosPrimos() {
	const celdas = document.getElementsByTagName("td");

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
		const sqrtNumeroRedondeadoArriba = Math.floor(Math.sqrt(numero));

		for (let i = 2; i <= sqrtNumeroRedondeadoArriba && isPrimo; i++) {
			if (numero % i == 0) isPrimo = false; 
		}
	}

	return isPrimo;
}