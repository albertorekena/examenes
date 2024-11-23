"use strict";

import {guardar, borrarSuccess, mostrarDiscos} from "./formulario.js";

document.addEventListener("DOMContentLoaded", () => {
	const discos = [];
	let isMostrarDiscos = false;

	document.getElementById("form").addEventListener("submit", e => {
		e.preventDefault();

		const disco = guardar();

		if (disco) discos.push(disco);

		// Si los discos estaban siendo mostrados, se siguen mostrando con el nuevo disco registrado
		if (isMostrarDiscos) mostrarDiscos(discos);
	});

	// Una vez que ya se ha enviado un formulario; el cual era correcto, aparece un mensaje tipo success. Cuando se vuelve
	// a escribir en el formulario para crear el siguiente disco, el mensaje de success es borrado.
	document
		// Se seleccionan todos los campos del formulario, para detectar si hay algún cambio
		.querySelectorAll("#nombre, #grupo, #anyo-publicacion, #tipo-musica, #localizacion, #prestado")
		.forEach(campo => campo.addEventListener("input", borrarSuccess));

	document.getElementById("mostrar-discos").addEventListener("click", () => {
		mostrarDiscos(discos)
		isMostrarDiscos = !isMostrarDiscos;
	});
});