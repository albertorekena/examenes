"use strict";

function llenarArray() {
	const arreglo = [];
	const longitudArreglo = 9;
	let item;
	
	// Se utiliza un while porque no se sabe cuántos ciclos se tardará en tener el array sin los números repetidos
	// En general, en la resolución de esta función se podría haber utilizado otro sistema en el que, una vez añadido el número a la variable final arreglo,
	// éste ya no se pudiera elegir. Por ejemplo, utilizar un array base que fuera [1, 2, 3, 4, 5, 6, 7, 8, 9] y, pasar de manera aleatoria items a la variable final arreglo.
	// La solución que yo propongo en este caso es menos eficiente pero más flexible.
	let i = 0;
	while (i < longitudArreglo) {
		let itemRepetido = false;
		// Se genera el número entero entre 1 y 9
		item = Math.ceil(Math.random() * 9);

		for (let j = 0; j < arreglo.length; j++) {
			if (arreglo[j] == item) itemRepetido = true;
		}

		if (!itemRepetido) {
			arreglo.push(item);
			i++;
		}
	}

	return arreglo;
}

function isItemRepetido(arreglo) {
	let itemRepetido = false;

	if (arreglo.length != 9) throw new Error("El número de items del array es distinto de 9.");

	// Si hay un item repetido, el bucle no se vuelve a ejecutar.
	for (let i = 0; i < arreglo.length && !itemRepetido; i++) {
		for (let j = 0; j < arreglo.length && i != j && !itemRepetido; j++) {
			if (arreglo[i] == arreglo[j]) itemRepetido = true;
		}
	}

	return itemRepetido;
}

const arreglo = llenarArray();
// const arreglo = [1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log("\n\n");
console.log(arreglo);
console.log("\n");
console.log(isItemRepetido(arreglo));
console.log("\n\n");