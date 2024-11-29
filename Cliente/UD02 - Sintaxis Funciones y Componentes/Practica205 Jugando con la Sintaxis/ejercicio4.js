"use strict";

const campoMinasEjemplo = [
	[-1, 0, 0, 0],
	[ 0, 0, 0, 0],
	[ 0,-1, 0, 0],
	[ 0, 0, 0, 0]
];

function buscaMinas(localizacionMinas) {
	const alturaCampoMinado = localizacionMinas.length;
	const baseCampoMinado = localizacionMinas[0].length;
	// La variable que se va a representar (campoMinado) inicialmente es una copia de la variable que muestra la ubicación de las minas
	const campoMinado = [...localizacionMinas];

	for (let i = 0; i < localizacionMinas.length; i++) {
		for (let j = 0; j < localizacionMinas[i].length; j++) {
			// Se modificará la variable campoMinado cuando, recorriendo localizacionMinas con bucles, se encuentre una mina 
			if (localizacionMinas[i][j] == -1) {
				// Cuando se encuentra una mina, se suma 1 a las casillas de alrededor, siempre que se cumplan ciertas condiciones
				for (let k = i - 1; k <= i + 1; k++) {
					for (let l = j - 1; l <= j + 1; l++) {
						if (
							k >= 0
							&& k < alturaCampoMinado
							&& l >= 0
							&& l < baseCampoMinado
							&& !(k == i && l == j)
							&& campoMinado[k][l] != -1
						) {
							campoMinado[k][l]++;
						}
					}
				}
			}
		}
	}
	
	for (let i = 0; i < campoMinado.length; i++) {
		console.log(campoMinado[i]);	
	}
}

console.log("\n\n");
console.log("La cantidad de minas adyacente para el campo de minas introducido es:\n")
buscaMinas(campoMinasEjemplo);
console.log("\n\n");