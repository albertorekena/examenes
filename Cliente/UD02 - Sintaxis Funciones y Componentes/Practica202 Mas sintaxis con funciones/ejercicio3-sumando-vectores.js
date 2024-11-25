"use strict";

function calcular(funcion1, funcion2, funcion3) {
	let array1 = [];
	let array2 = [];
	let array3 = [];

	array1 = [...funcion1(3)];
	array2 = [...funcion2([1, 2], [3, 5])];
	array3 = f3([...array1, ...array2]);
}

function f1(cantidadNumerosGenerados) {
	const arr = [];

	for (let i = 0; i < cantidadNumerosGenerados; i++) {
		arr[i] = Math.floor(Math.random() * 100) + 1;
	}

	return arr;
}

function f2(arr1, arr2) {
	const arrt = [];

	if (arr1.length == arr2.length) {
		for (let i = 0; i < arr1.length; i++) {
			arrt[i] = arr1[i] + arr2[(arr1.length - 1) - i];
		}
	}

	return arrt;
}

function f3(arr) {
	console.log("\n\nEl array de funcion3, que es la combinación de los arrays de funcion1 y funcion 2, es: [" + arr.join(", ") + "].\n\n");
}

calcular(f1, f2, f3);