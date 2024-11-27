"use strict";

function temporizador(primerParametro, segundoParametro) {
	let segundosTotales;

	if (
		!Number.isInteger(primerParametro)
		|| (segundoParametro !== undefined && !Number.isInteger(segundoParametro))
		|| (primerParametro < 0 || segundoParametro < 0)
		|| (primerParametro > 59 || segundoParametro > 59)
	) {
		throw new Error("El tipo de los parámetros introducidos en la función no es correcto")
	}

	segundosTotales = segundoParametro !== undefined ? primerParametro * 60 + segundoParametro : primerParametro;

	const intv = setInterval(actualizarReloj, 1000);

	console.log("Tiempo restante: ")

	function actualizarReloj() {
		console.log(segundosTotales + " segundos.");
		segundosTotales--;

		if (segundosTotales < 0) clearInterval(intv);
	}
}

temporizador(2, 50);