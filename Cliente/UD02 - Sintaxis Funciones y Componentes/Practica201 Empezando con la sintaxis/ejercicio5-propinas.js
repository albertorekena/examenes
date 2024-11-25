"use strict";

const facturas = [124, 48, 268];

function imprimirTodosLosGastos(facturas) {
	const propinas = [];
	const cantidadesFinales = [];

	for (let i = 0; i < facturas.length; i++) {
		if (facturas[i] >= 0 && facturas[i] < 50) {
			propinas[i] = 20;
		} else if (facturas[i] >= 50 && facturas[i] <= 200) {
			propinas[i] = 15;
		} else if (facturas[i] > 200) {
			propinas[i] = 10;
		} else {
			console.log("Error. La cantidad de la factura no puede ser negativa: " + facturas[i]);
			return;
		}
	}

	console.log("FACTURA\t\t" + "PROPINA\t\t" + "TOTAL");
	console.log("----------------------------------");

	for (let i = 0; i < facturas.length; i++) {
		cantidadesFinales[i] = (facturas[i] * ((100 + propinas[i]) / 100)).toFixed(2);

		console.log(facturas[i].toFixed(2) + "\t\t" + (facturas[i] * propinas[i] / 100).toFixed(2) + "\t\t" + cantidadesFinales[i]);
	}
}

imprimirTodosLosGastos(facturas);