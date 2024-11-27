"use strict";

const discente = {
	id:2,
	nombre:"Ana López Martín",
	aficiones:["pintar", "bailar", "tocar el piano"],
	notas:{
		primera:9,
		segunda:8.5,
		tercera:9.8
	},
	calcularMedia:function () {
		return ((this.notas.primera + this.notas.segunda + this.notas.tercera) / 3).toFixed(2);
	},
	imprimirAficiones:function () {
		console.log("Aficiones: " + this.aficiones.join(", "));
	},
	imprimirInforme:function () {
		console.log("ID: " + this.id);
		console.log("Nombre: " + this.nombre);
		this.imprimirAficiones();
		console.log("Notas: " + "Primera Evaluación: " + this.notas.primera + ", Segunda Evaluación: " + this.notas.segunda + ", Tercera Evaluación: " + this.notas.tercera);
		console.log("Nota Media: " + this.calcularMedia());
	}
};

discente.imprimirInforme();