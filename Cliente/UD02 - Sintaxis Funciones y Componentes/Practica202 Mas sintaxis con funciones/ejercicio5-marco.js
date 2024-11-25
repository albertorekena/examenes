"use strict";

function dibujarMarco(ladoCuadradoExterior, ladoCuadradoInterior) {
	console.log("\n\n");

	// Se asegura que haya el mismo número de caracteres a la izquierda y a la derecha del cuadrado interior
	if (ladoCuadradoExterior > 0 && ladoCuadradoInterior > 0 && ((ladoCuadradoExterior - ladoCuadradoInterior) % 2 == 0)) {
		let fila = "";
		// Se calcula la "distancia" que hay del borde del cuadrado exterior al interior
		let padding = (ladoCuadradoExterior - ladoCuadradoInterior) / 2;

		for (let i = 1; i <= ladoCuadradoExterior; i++) {
			for (let j = 1; j <= ladoCuadradoExterior; j++) {
				if (i <= padding || i > (padding + ladoCuadradoInterior)) {
					fila += "#";
				} else {
					fila += j <= padding || j > (padding + ladoCuadradoInterior) ? "#" : ".";
				}
			}

			console.log(fila);
			fila = "";
		}
	} else {
		console.log("Por favor, introduce números positivos, donde el ladoCuadradoExterior sea mayor que ladoCuadradoInterior y, que la diferencia entre ambos lados sea par.");
	}

	console.log("\n\n");
}

dibujarMarco(21, 7);