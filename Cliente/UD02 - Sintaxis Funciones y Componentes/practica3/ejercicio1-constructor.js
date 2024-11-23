"use strict";

// Función que crea el objeto curso
function constructorCurso(nombre = "", anyo = null, descripcion = "", alumnado = []) {
	return {nombre, anyo, descripcion, alumnado};
}

const curso = constructorCurso("Matematicas", 2024, "Curso de mates", ["Juan", "Pepe", "Damian"]);

console.log("\n\n");
console.log(curso.nombre);
console.log(curso.anyo);
console.log(curso.descripcion);
console.log(curso.alumnado);
console.log("\n\n");