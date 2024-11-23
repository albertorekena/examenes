"use strict";

import {crearTablaDondePintar, reiniciarTabla} from "./funciones.js";
// "pintar" está en un archivo aparte para tener encapsulada la variable colorSeleccionado
import pintar from "./pintar.js";

document.addEventListener("DOMContentLoaded", () => {
	// Creación e inyección en el Dom de todos los elementos de la tabla en la que se pinta
	crearTablaDondePintar();

	pintar();

	document
		.getElementById("boton-reiniciar")
		.addEventListener("click", () => reiniciarTabla());
});