"use strict";

function numeros(veces, numero) {
	let resultado = "";

	for (let i = 0; i < veces; i++) {
		resultado += (numero + " ");
		numero *= 2;
	}

	console.log(resultado);
}

numeros(4, 6);