"use strict";

function sumarParametros() {
	const arregloNumeros = [];

	if (arguments.length >= 2) {
		// Se utiliza el parámetro "arguments" como indica el enunciado.
		// Sin embargo sería preferible usar un parámetro del tipo spread ("...parametros")
		for (let i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] === "number") {
				arregloNumeros[i] = arguments[i];
			} else {
				// La ejecución del programa es detenida como inidica el enunciado, si se introduce un argumento que no sea un número
				throw new Error("No todos los argumentos son números. Por favor, introduce únicamente números en la función.");
			}
		}
	} else {
		// La ejecución del programa es detenida como inidica el enunciado, si se introduce un argumento que no sea un número
		throw new Error("Has introducido menos de 2 argumentos en la función. Por favor, introduce 2 o más argumentos en la función.");
	}

	// "join" puede unir los items de un array con el separador considerado
	console.log("Los argumentos introducidos en la función son: " + arregloNumeros.join(", ") + ".");
}

sumarParametros(1, 2, 3);