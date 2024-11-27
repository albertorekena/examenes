"use strict";

function constructorCurso(nombre = "", anyo = null, descripcion = "", alumnado = []) {
	return {nombre, anyo, descripcion, alumnado};
}

function mostrarCurso(curso) {
	const anchoColumna = 18;

	console.log("TIPO".padEnd(anchoColumna, " ") + "NOMBRE".padEnd(anchoColumna, " ") + "VALOR");

	for (let propiedad in curso) {
		console.log((typeof curso[propiedad]).padEnd(anchoColumna, " ") + (propiedad + "").padEnd(anchoColumna, " ") + curso[propiedad]);
	}
}

const curso = constructorCurso("Matematicas", 2024, "Curso de mates", ["Juan", "Pepe", "Damian"]);
mostrarCurso(curso);