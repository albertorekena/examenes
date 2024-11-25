"use strict";

function tablas(numero, multiplicar) {
	if (Number.isInteger(numero) && numero > 2) {
		for (let i = numero; i >= 2; i--) {
			console.log("La tabla de multiplicar del número " + i + " es:");
			multiplicar(i);
		}
	} else {
		throw new Error("El número introducido para calcular sus tablas de multiplicar, debe ser entero positivo y mayor que 2.");
	}
}

function multiplicar(num) {
	for (let i = 0; i <= 10; i++) {
		console.log(num + " * " + i + " = " + (num * i));
	}
}

tablas(3, multiplicar);