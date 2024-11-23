"use strict";

function llenarArrayBidimensional() {
	const arreglo = [[], [], []];
	const longitudFlatArreglo = 9;
	const longitudArregloInterior = 3;
	let item;
	let flatArreglo;
	let i = 0;
	let j = 0;

	let k = 0;
	while (k < longitudFlatArreglo) {
		let itemRepetido = false;
		item = Math.ceil(Math.random() * 9);

		// El método flat transforma un arreglo de varias dimensiones, en un arreglo de una única dimensión el cual facilita averiguar si el número que se quiere introducir
		// está o no ya en él
		flatArreglo = arreglo.flat();
		for (let l = 0; l < flatArreglo.length; l++) {
			if (flatArreglo[l] == item) itemRepetido = true;
		}

		// Si el valor no está ya en la variable arreglo (bidimensional), se le añade 
		if (!itemRepetido) {
			if (j < longitudArregloInterior) {
				arreglo[i].push(item);
				j++;

				if (j >= longitudArregloInterior) {
					j = 0;
					i++;
				}
			}

			k++;
		}
	}

	return arreglo;
}

function isItemRepetidoArregloBidimensional(arregloBidimensional) {
	let itemRepetido = false;
	let flatArreglo;

	if (arregloBidimensional.length > 3) {
		throw new Error("El arregloBidimensional no es del tipo 3x3.");

		for (let i = 0; i < arregloBidimensional.length; i++) {
			if (arregloBidimensional[i].length > 3) throw new Error("El arregloBidimensional no es del tipo 3x3.");
		}
	}

	// Como en la función anterior, se utiliza el método flat() para facilitar la comprobación de si hay un item repetido 
	flatArreglo = arregloBidimensional.flat()

	for (let i = 0; i < flatArreglo.length && !itemRepetido; i++) {
		for (let j = 0; j < flatArreglo.length && i != j && !itemRepetido; j++) {
			if (flatArreglo[i] == flatArreglo[j]) itemRepetido = true;
		}
	}

	return itemRepetido;
}

const arregloBidimensional = llenarArrayBidimensional();
// const arregloBidimensional = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
console.log("\n\n");
console.log(arregloBidimensional);
console.log("\n");
console.log(isItemRepetidoArregloBidimensional(arregloBidimensional));
console.log("\n\n");