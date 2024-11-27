"use strict";

function constructorCurso(nombre = "", anyo = null, descripcion = "", alumnado = []) {
	return {nombre, anyo, descripcion, alumnado};
}

const curso = constructorCurso("Matematicas", 2024, "Curso de mates", ["Juan", "Pepe", "Damian"]);

console.log(curso.nombre);
console.log(curso.anyo);
console.log(curso.descripcion);
console.log(curso.alumnado);