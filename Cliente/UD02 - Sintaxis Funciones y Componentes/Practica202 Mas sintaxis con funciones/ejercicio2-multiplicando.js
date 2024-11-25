"use strict";

// Se introducirá un argumento de tipo number, y la referencia de una función ("multiplicar") que se creará posteriormente.
function tablas(numero, multiplicar) {
	if (Number.isInteger(numero) && numero > 2) {
		console.log("\n\n");

		for (let i = numero; i >= 2; i--) {
			console.log("La tabla de multiplicar del número " + i + " es:");
			multiplicar(i);
		}
	} else {
		// La ejecución del programa es detenida como inidica el enunciado, si se introduce un argumento que no sea un número
		throw new Error("El número introducido para calcular sus tablas de multiplicar, debe ser entero positivo y mayor que 2.");
	}
}

function multiplicar(num) {
	for (let i = 0; i <= 10; i++) {
		console.log(num + " * " + i + " = " + (num * i));
	}

	console.log("\n");
}

tablas(3, multiplicar);