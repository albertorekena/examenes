"use strict";

function sumarParametros() {
	let suma = 0;

	if (arguments.length >= 2) {
		for (let i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] === "number") {
				suma += arguments[i];
			} else {
				throw new Error("No todos los argumentos son números. Por favor, introduce únicamente números en la función.");
			}
		}
	} else {
		throw new Error("Has introducido menos de 2 argumentos en la función. Por favor, introduce 2 o más argumentos en la función.");
	}

	console.log("La suma de los números introducidos en la función es: " + suma);
}

sumarParametros(1, 2, 3);