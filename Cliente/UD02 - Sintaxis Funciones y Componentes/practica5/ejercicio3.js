"use strict";

const sudokuCorrecto = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[7, 8, 9, 1, 2, 3, 4, 5, 6],
	[4, 5, 6, 7, 8, 9, 1, 2, 3],
	[3, 1, 2, 6, 4, 5, 9, 7, 8],
	[9, 7, 8, 3, 1, 2, 6, 4, 5],
	[6, 4, 5, 9, 7, 8, 3, 1, 2],
	[2, 3, 1, 5, 6, 4, 8, 9, 7],
	[8, 9, 7, 2, 3, 1, 5, 6, 4],
	[5, 6, 4, 8, 9, 7, 2, 3, 1]
];

const sudokuIncorrecto = [
	[2, 2, 3, 4, 5, 6, 7, 8, 9],
	[7, 8, 9, 1, 2, 3, 4, 5, 6],
	[4, 5, 6, 7, 8, 9, 1, 2, 3],
	[3, 1, 2, 6, 4, 5, 9, 7, 8],
	[9, 7, 8, 3, 1, 2, 6, 4, 5],
	[6, 4, 5, 9, 7, 8, 3, 1, 2],
	[2, 3, 1, 5, 6, 4, 8, 9, 7],
	[8, 9, 7, 2, 3, 1, 5, 6, 4],
	[5, 6, 4, 8, 9, 7, 2, 3, 1]
];

function isItemRepetido(arreglo) {
	let itemRepetido = false;

	if (arreglo.length != 9) throw new Error("El número de items del array es distinto de 9.");

	for (let i = 0; i < arreglo.length && !itemRepetido; i++) {
		for (let j = 0; j < arreglo.length && i != j && !itemRepetido; j++) {
			if (arreglo[i] == arreglo[j]) itemRepetido = true;
		}
	}

	return itemRepetido;
}

function isItemRepetidoArregloBidimensional(arregloBidimensional) {
	let isItemRepetido = false;
	let flatArreglo;

	if (arregloBidimensional.length > 3) {
		throw new Error("El arregloBidimensional no es del tipo 3x3.");

		for (let i = 0; i < arregloBidimensional.length; i++) {
			if (arregloBidimensional[i].length > 3) throw new Error("El arregloBidimensional no es del tipo 3x3.");
		}
	}

	flatArreglo = arregloBidimensional.flat()

	for (let i = 0; i < flatArreglo.length && !isItemRepetido; i++) {
		for (let j = 0; j < flatArreglo.length && i != j && !isItemRepetido; j++) {
			if (flatArreglo[i] == flatArreglo[j]) isItemRepetido = true;
		}
	}

	return isItemRepetido;
}

function isSudokuCorrecto(sudoku) {
	let isCorrecto = true;
	let columna = [];
	let arregloBidimensional = [[], [], []];

	if (sudoku.length == 9) {
		for (let i = 0; i < sudoku.length; i++) {
			if (sudoku[i].length != 9) throw new Error("El número de items del array es distinto de 9x9.");
		}
		
		// Con este bucle se comprueba, en la primera parte, si el sudoku es válido por filas y, en la segunda parte, por columnas. Para ello se utiliza la
		// variable columna de apoyo
		for (let i = 0; i < sudoku.length && isCorrecto; i++) {
			isCorrecto = !isItemRepetido(sudoku[i]);
		
			for (let j = 0; j < sudoku[i].length && isCorrecto; j++) {
				columna.push(sudoku[j][i]);
			}
			if (isCorrecto) {
				isCorrecto = !isItemRepetido(columna);
				columna = [];	
			}
		}

		// Con esta serie de bucles anidados se crean y se comprueban las matrices 3x3 necesarias para verificar la validez del sudoku 
		for (let i = 0; i < sudoku.length && isCorrecto; i+=3) {
			for (let j = 0; j < sudoku[i].length; j+=3) {
				for (let k = 0; k < 3; k++) {
					for (let l = 0; l < 3; l++) {
						arregloBidimensional[k][l] = sudoku[i + k][j + l];
					}
				}
				
				isCorrecto = !isItemRepetidoArregloBidimensional(arregloBidimensional);
				arregloBidimensional = [[], [], []];
			}
		}
	} else {
		throw new Error("El número de items del array es distinto de 9x9.");
	}

	return isCorrecto;
}

console.log("\n\n");
console.log("¿Es correcto el Sudoku? --> " + isSudokuCorrecto(sudokuCorrecto));
console.log("\n\n");