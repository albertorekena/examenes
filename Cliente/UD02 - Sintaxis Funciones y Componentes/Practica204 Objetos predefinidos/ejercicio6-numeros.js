"use strict";

const numeroInicial = 0;
const numeroFinal = 100000;

function numerosPrimosYCapicuas() {
	const numeros = [];
	let isPrimo = true;
	let isCapicua = false;
	let iString;

	for (let i = numeroInicial; i <= numeroFinal; i++) {
		isPrimo = isPrimoFunc(i);

		iString = i + "";

		if (iString == iString.split("").reverse().join("")) {
			isCapicua = true;
		}

		if (isPrimo && isCapicua) {
			numeros.push(i);
		}

		isPrimo = true;
		isCapicua = false;
	}

	console.log(numeros.join("    "));
}

function isPrimoFunc(numero) {
	let isPrimo = true;

	if (numero <= 1) {
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

numerosPrimosYCapicuas();