const provinciaSeleccionada = (e, poblaciones) => {
	resetearValores();

	const selectPoblaciones = document.getElementById("select-poblaciones");
	let provinciaSeleccionada = e.target.value;

	let poblacionesAMostrar;
	let htmlOptionsPoblaciones = "<option value='' selected disabled>-- Selecciona Población --</option>";

	// Si el nombre de la provincia, que está en [0] y se utiliza como value, es el seleccionado, entonces
	// se seleccionan sus poblaciones con poblacionesAMostrar
	poblaciones.forEach(pob => {
		if (pob.provincia[0] == provinciaSeleccionada) poblacionesAMostrar = pob.poblaciones;
	});

	poblacionesAMostrar.forEach(pam => {
		htmlOptionsPoblaciones += `<option value=${pam[0]}>${pam[1]}</option>`
	});

	selectPoblaciones.innerHTML = htmlOptionsPoblaciones;
};

const resetearValores = () => {
	document.getElementById("error-provincia").textContent = "";
	document.getElementById("error-poblacion").textContent = "";
	document.getElementById("success").innerHTML = "&nbsp;";
};

const enviarDatos = e => {
	e.preventDefault();

	const selectProvincias = document.getElementById("select-provincias");
	const errorProvincia = document.getElementById("error-provincia");
	const selectPoblaciones = document.getElementById("select-poblaciones");
	const errorPoblacion = document.getElementById("error-poblacion");
	const success = document.getElementById("success");

	if (selectProvincias.value && selectPoblaciones.value) {
		success.textContent = "Formulario enviado correctamente."
		errorProvincia.textContent = "";
		errorPoblacion.textContent = "";
	} else {
		if (!selectProvincias.value) errorProvincia.textContent = "Tienes que seleccionar una provincia.";

		if (!selectPoblaciones.value) errorPoblacion.textContent = "Tienes que seleccionar una población.";
	}
};

export {provinciaSeleccionada, resetearValores, enviarDatos};