"use strict";

import {iniciarTableros} from "./funciones.js";
// "jugar" está en un archivo aparte para tener mejor organizado el código
import jugar from "./jugar.js";

document.addEventListener("DOMContentLoaded", () => {
	// "iniciarTableros"" crea desde cero los 2 tableros. Esto es así porque luego será más práctico reiniciar el juego completamente, también
	// con "iniciarTableros". Y, de esta forma se eliminan los "listeners" antiguos completamente
	iniciarTableros();

	jugar();

	document.getElementById("boton").addEventListener("click", () => {
		document.getElementById("piezas-inicial").remove();
		document.getElementById("piezas-final").remove();
		iniciarTableros()
		jugar();
	});
});