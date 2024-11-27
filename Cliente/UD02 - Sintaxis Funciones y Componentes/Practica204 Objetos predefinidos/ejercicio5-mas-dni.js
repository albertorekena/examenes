"use strict";

const dniInicial = 48357001;
const dniFinal = 48360000;
const relacionLetrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";
let dnisTotales;

function masDnis(letra) {
	const resto = relacionLetrasDni.indexOf(letra);
	const dnis = [];
	
	for (let i = dniInicial; i <= dniFinal; i++) {
		if (i % 23 == resto) {
			dnis.push(i + letra);
		}
	}

	return dnis;
}

dnisTotales = masDnis("H");

console.log("\n\n");
console.log("Hay " + dnisTotales.length + " DNI entre " + dniInicial + " y " + dniFinal);
console.log(dnisTotales.join("   "));
console.log("\n\n");