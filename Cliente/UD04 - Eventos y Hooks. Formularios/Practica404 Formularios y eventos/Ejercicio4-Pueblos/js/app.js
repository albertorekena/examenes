"use strict";

import {provinciaSeleccionada, enviarDatos, resetearValores} from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
	const poblaciones = [
		{
			provincia:["castellon", "Castellón"],
			poblaciones:[
				["castellon", "Castellón"],
				["oropesa", "Oropesa"],
				["vinaroz", "Vinaroz"]
			]
		},
		{
			provincia:["valencia", "Valencia"],
			poblaciones:[
				["valencia", "Valencia"],
				["xativa", "Xàtiva"],
				["torrent", "Torrent"]
			]
		},
		{
			provincia:["alicante", "Alicante"],
			poblaciones:[
				["alicante", "Alicante"],
				["elche", "Elche"],
				["petrer", "Petrer"]
			]
		}
	];

	document.getElementById("select-provincias").addEventListener("change", e => provinciaSeleccionada(e, poblaciones));
	document.getElementById("form").addEventListener("submit", e => enviarDatos(e));
	document.getElementById("select-poblaciones").addEventListener("change", e => resetearValores());
});