"use strict";

function dibujarCruz(lado) {
	if (lado % 3 == 0) {
		const longitudSegmento = lado / 3;
		let fila = "";

		for (let i = 1; i <= lado; i++) {
			for (let j = 1; j <= lado; j++) {
				if (i <= longitudSegmento || i > (longitudSegmento * 2)) {
					fila += (j > longitudSegmento && j <= (longitudSegmento * 2)) ? "." : "#";
				} else {
					fila += ".";
				}
			}

			console.log(fila);
			fila = "";
		}
	} else {
		console.log("Por favor, introduce un número múltiplo de 3 para dibujar la cruz.");
	}
}

dibujarCruz(9);