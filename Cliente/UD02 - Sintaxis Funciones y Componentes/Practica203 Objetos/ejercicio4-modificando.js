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

function curso() {
  if (
    arguments.length != 3
    || typeof arguments[0] != "string"
    || typeof arguments[1] != "number"
    || typeof arguments[2] != "string"
  ) {
		throw new Error("La firma de la función es incorrecta.");
  }

	return {
		nombreCurso:arguments[0],
		anyoCurso:arguments[1],
		descripcionCurso:arguments[2],
		alumnado:[],
		matricular:function (disc) {
			cursoObj.alumnado = [...this.alumnado, disc];
		}
	};
}

const cursoObj = curso("Matematicas", 2024, "Curso de mates");
console.log("nombreCurso: " + cursoObj.nombreCurso);
console.log("anyoCurso: " + cursoObj.anyoCurso);
console.log("descripcionCurso: " + cursoObj.descripcionCurso);
console.log("alumnado: [" + cursoObj.alumnado.join(", ") + "]");

console.log("Añadiendo discente a la propiedad \"alumnado\"...")
cursoObj.matricular(discente);
console.log("alumnado[0]:");
cursoObj.alumnado[0].imprimirInforme();