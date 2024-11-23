// Se le llama formulario a este archivo, en lugar de funciones, porque se tiene una variable compartida ("error")
const error = document.getElementById("error");

const crearParrafo = e => {
	e.preventDefault();

	const textarea = document.getElementById("textarea");
	const select = document.getElementById("select");
	const resultado = document.getElementById("resultado");

	if (textarea.value && select.value) {
		const parrafo = document.createElement("p");
		resultado.appendChild(parrafo);
		parrafo.textContent = textarea.value;
		parrafo.classList.add(select.value);
		error.innerHTML = "&nbsp;";
	} else {
		if (!textarea.value && !select.value) {
			error.textContent = "Debes escribir un texto y seleccionar un estilo.";
		}

		if (!textarea.value && select.value) {
			error.textContent = "Debes escribir un texto.";
		}

		if (textarea.value && !select.value) {
			error.textContent = "Debes seleccionar un estilo.";
		}
	}

	textarea.value = "";
	select.getElementsByTagName("option")[0].selected = "selected";
};

const eliminarMensajeError = () => {
	if (textarea.value && select.value) error.innerHTML = "&nbsp;";
};

export {crearParrafo, eliminarMensajeError};