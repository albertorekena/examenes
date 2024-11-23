"use strict";

import {camposSelect, anyadirCampo, crearFormulario} from "./formulario-campo-a-anyadir.js";

document.addEventListener("DOMContentLoaded", () => {
	// El hecho de seleccionar un elemento diferente de la lista (evento "change"), ya hace que se creen diferentes campos
	document.getElementById("form-anyadir-campo-select").addEventListener("change", e => camposSelect(e));
	// Con anyadirCampo se va creando el borrador del formulario que finalmente se quiere crear
	document.getElementById("form-anyadir-campo").addEventListener("submit", e => anyadirCampo(e));
	// Una vez que el borrador está termina, se crea el formulario con crearFormulario
	document.getElementById("form-borrador").addEventListener("submit", e => crearFormulario(e));
	document
		.getElementById("form-borrador__button-button")
		.addEventListener("click", () => document.getElementById("borrador-formulario").innerHTML = "");
});