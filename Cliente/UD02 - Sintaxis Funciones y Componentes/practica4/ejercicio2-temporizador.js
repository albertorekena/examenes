"use strict";

function temporizador(primerParametro, segundoParametro) {
	let segundosTotales;

	if (
		(!Number.isInteger(primerParametro) || !(Number.isInteger(segundoParametro) || segundoParametro === undefined))
		|| (primerParametro < 0 || segundoParametro < 0)
		|| (primerParametro > 59 || segundoParametro > 59)
	) {
		throw new Error("El tipo de los parámetros introducidos en la función no es correcto")
	}

	// Se controla si se han introducido 1 ó 2 parámetros
	segundosTotales = segundoParametro !== undefined ? primerParametro * 60 + segundoParametro : primerParametro;

	const intv = setInterval(actualizarReloj, 1000);

	console.log("\n\n");
	console.log("Tiempo restante: ")

	function actualizarReloj() {
		console.log(segundosTotales + " segundos.");
		segundosTotales--;

		if (segundosTotales == -1) {
			clearInterval(intv);
			console.log("\n\n");
		}
	}
}

temporizador(2, 50);