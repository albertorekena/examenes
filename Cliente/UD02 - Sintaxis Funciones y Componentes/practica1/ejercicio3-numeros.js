"use strict";

function numeros(veces, numero) {
	let resultado = "";

	for (let i = 0; i < veces; i++) {
		// El símbolo "+" cuando se utiliza con strings y con numbers, funciona como un encadenador de strings
		resultado += " " + numero;
		numero *= 2;
	}

	console.log(resultado);
}

console.log("\n\n");
numeros(4, 6);
console.log("\n\n");