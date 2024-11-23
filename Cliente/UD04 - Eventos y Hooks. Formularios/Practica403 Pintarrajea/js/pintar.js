let colorSeleccionado = {};

const seleccionarColor = () => {
	let color = {};

	document
		.querySelectorAll(".tabla-seleccion-colores__celda-color")
		.forEach(td => td.addEventListener("click", e => color.color = e.target.dataset.color));

	return color;
};

colorSeleccionado = seleccionarColor();

const pintar = () => {
	// Se utiliza una variable de tipo flag para identificar el estado de la interacción con la web
	// Esta variable será clave en las funciones "comenzarYAcabarDePintar" de "continuarPintando"
	let isComenzado = false;

	const celdasDondePintar = document.querySelectorAll(".tabla-donde-pintar__celda");

	const comenzarYAcabarDePintar = evento => {
		if (!isComenzado) {
			evento.target.setAttribute("style", `background-color:${colorSeleccionado.color};`);
			isComenzado = true;
		} else {
			isComenzado = false;
		}
	};
	celdasDondePintar.forEach(celda => celda.addEventListener("click", comenzarYAcabarDePintar));

	const continuarPintando = evento => {
		if (isComenzado) {
			evento.target.setAttribute("style", `background-color:${colorSeleccionado.color};`);
		}
	}
	celdasDondePintar.forEach(celda => celda.addEventListener("mouseover", continuarPintando));
};

export default pintar;