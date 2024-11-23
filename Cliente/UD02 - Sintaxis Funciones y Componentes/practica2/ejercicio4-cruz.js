"use strict";

function dibujarCruz(lado) {
	console.log("\n\n");

	if (lado % 3 == 0) {
		// Se utiliza la variable "longitudSegmento" para decidir qué parámetro se añadirá a "fila" en los 2 blucles for posteriores
		const longitudSegmento = lado / 3;
		let fila = "";
		
		for (let i = 1; i <= lado; i++) {
			for (let j = 1; j <= lado; j++) {
				if (i <= longitudSegmento || i > (longitudSegmento * 2)) {
					fila += j > longitudSegmento && j <= (longitudSegmento * 2) ? "." : "#";
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

	console.log("\n\n");
}

dibujarCruz(9);