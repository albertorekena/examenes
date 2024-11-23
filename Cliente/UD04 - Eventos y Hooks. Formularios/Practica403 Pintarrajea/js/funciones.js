const crearTablaDondePintar = () => {
	const tablaDondePintar = document.getElementById("tabla-donde-pintar");
	const numeroFilas = 60;
	const numeroColumnas = 50;
	let celdasTabla = "";

	for (let i = 0; i < numeroFilas; i++) {
		celdasTabla += "<tr class='tabla-donde-pintar__fila'>";

		for (let j = 0; j < numeroColumnas; j++) {
			celdasTabla += "<td class='tabla-donde-pintar__celda'></td>"
		}

		celdasTabla += "</tr>";
	}

	tablaDondePintar.innerHTML = `<tbody class="tabla-donde-pintar__tbody">${celdasTabla}</tbody>`;
};

// La función "reiniciarTabla" realmente cambia el color de fondo de las <td> y le vuelve a poner el original
const reiniciarTabla = () => {
	document
		.getElementById("tabla-donde-pintar")
		.querySelectorAll(".tabla-donde-pintar__celda")
		.forEach(celda => celda.setAttribute("style", "background-color:#eee"));
};

export {crearTablaDondePintar, reiniciarTabla};