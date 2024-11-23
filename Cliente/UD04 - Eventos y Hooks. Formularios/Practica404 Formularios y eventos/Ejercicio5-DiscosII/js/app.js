"use strict";

import {guardar, cambiarFormatoCampo} from "./formulario.js";
import {mostrarDiscos} from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
	const discos = [];
	let isMostrarDiscos = false;

	document.getElementById("form").addEventListener("submit", e => {
		e.preventDefault();

		const disco = guardar();

		if (disco) discos.push(disco);

		if (isMostrarDiscos) mostrarDiscos(discos);
	});

	// Mientras se escribe en un campo, se controla si el dato es correcto o no, y se va mostrando la señal de error si corresponde o no.
	// También se borra el mensaje de success, si está presente
	document
		.querySelectorAll("#nombre, #grupo, #anyo-publicacion, #tipo-musica, #localizacion, #prestado")
		.forEach(campo => campo.addEventListener("input", e => cambiarFormatoCampo(e)));

	document.getElementById("mostrar-discos").addEventListener("click", () => {
		mostrarDiscos(discos)
		isMostrarDiscos = !isMostrarDiscos;
	});
});