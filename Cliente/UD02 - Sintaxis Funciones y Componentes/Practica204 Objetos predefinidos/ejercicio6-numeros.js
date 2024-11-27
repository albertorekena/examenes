"use strict";

const numeroInicial = 0;
const numeroFinal = 100000;

function numerosPrimosYCapicuas() {
	const numeros = [];
	let primo = true;
	let capicua = false;
	let iString;

	for (let i = numeroInicial; i <= numeroFinal; i++) {
		for (let j = 2; j < i; j++) {
			primo = i % j == 0 ? false : true;
		}

		iString = i + "";

		// Para determinar si es capicúa, el número con formato string, es primeramente convertido en array,
		// donde cada item es un carácter. Luego se reordenan los items poniendo del revés el array,
		// para posteriormente convertirlo otra vez en cadena. Así ya se puede comparar con la cadena
		// original y determinar si es capicúa
		if (iString == iString.split("").reverse().join("")) {
			capicua = true;
		}

		if (primo && capicua) {
			numeros.push(i);
		}

		primo = true;
		capicua = false;
	}

	console.log(numeros.join("    "));
}

numerosPrimosYCapicuas();