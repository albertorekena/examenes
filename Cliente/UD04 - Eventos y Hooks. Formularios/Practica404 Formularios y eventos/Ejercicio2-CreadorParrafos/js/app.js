"use strict";

import {crearParrafo, eliminarMensajeError} from "./formulario.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("form").addEventListener("submit", e => crearParrafo(e));
	// Si falta algún dato aparece un mensaje de error. Con la función eliminarMensajeError, si el formulario está
	// ya correcto, el mensaje de error desaparece: antes de apretar al botón de "Crear párrafo"
	document.getElementById("select").addEventListener("change", eliminarMensajeError);
});