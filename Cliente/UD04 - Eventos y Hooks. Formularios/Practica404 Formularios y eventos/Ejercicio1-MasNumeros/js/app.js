"use strict";

import {crearCheckBoxes, marcarTodosLosPares, desmarcarTodos} from "./funciones.js";

document.addEventListener("DOMContentLoaded",() => {
	crearCheckBoxes();

	const todosLosCheckbox = document.querySelectorAll("input[type='checkbox']");

	document.getElementById("marcar-todos-los-pares").addEventListener("click", () => marcarTodosLosPares(todosLosCheckbox));

	document.getElementById("desmarcar-todos").addEventListener("click", () => desmarcarTodos(todosLosCheckbox));
});