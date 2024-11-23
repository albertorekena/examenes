// Se utiliza este archivo para encapsular variables que utilizan varias funciones (las de este archivo)

const camposAAnyadir = document.getElementById("campos-a-anyadir");
const formAnyadirCampoErrorMark = document.getElementById("form-anyadir-campo__error-mark");
let inputSeleccionado;
let idsFormulario = [];
let namesFormulario = [];
const borradorFormulario = document.getElementById("borrador-formulario");
let contadorFormularios = 0;

const camposSelect = e => {
	inputSeleccionado = e.target.value;
	formAnyadirCampoErrorMark.textContent = "";

	switch (inputSeleccionado) {
		case "input-texto":
		case "input-password":
		case "textarea":
			camposAAnyadir.innerHTML = "<input type='text' placeholder='escribe su id' data-atributo='id' class='form-anyadir-campo__campo-a-anyadir'/>";
			break;
		case "label":
			camposAAnyadir.innerHTML = "<input type='text' placeholder='escribe su for' data-atributo='for' class='form-anyadir-campo__campo-a-anyadir'/><input type='text' placeholder='escribe su texto' data-atributo='texto' class='form-anyadir-campo__campo-a-anyadir'/>";
			break;
		case "img":
			camposAAnyadir.innerHTML = "<input type='text' placeholder='escribe el src de la imagen' data-atributo='src' class='form-anyadir-campo__campo-a-anyadir'/><input type='text' placeholder='escribe su id' data-atributo='id' class='form-anyadir-campo__campo-a-anyadir'/>";
			break;
		case "checkbox":
		case "radio":
			camposAAnyadir.innerHTML = "<input type='text' placeholder='escribe su name' data-atributo='name' class='form-anyadir-campo__campo-a-anyadir'/><input type='text' placeholder='escribe su value' data-atributo='value' class='form-anyadir-campo__campo-a-anyadir'/>";
			break;
		case "submit":
			camposAAnyadir.innerHTML = "<input type='text' placeholder='escribe su id' data-atributo='id' class='form-anyadir-campo__campo-a-anyadir'/><input type='text' placeholder='escribe su value' data-atributo='value' class='form-anyadir-campo__campo-a-anyadir'/>";
			break;
		default:
			break;
	}
};

const anyadirCampo = e => {
	e.preventDefault();

	const todosLosCamposAAnyadir = camposAAnyadir.querySelectorAll("*");
	const formAnyadirCampoSelect = document.getElementById("form-anyadir-campo-select");
	let tipoAtributo;
	let error = false;

	// En caso de que se haya seleccionado alguna opción, la función empieza realmente a ejecutar el código que contiene
	if (todosLosCamposAAnyadir.length > 0) {
		// Se realiza una comprobación con de los ids y names ya utilizados en el borrador, puesto que no se pueden repetir
		todosLosCamposAAnyadir.forEach(campo => {
			tipoAtributo = campo.dataset.atributo;

			if (tipoAtributo == "id") {
				idsFormulario.forEach(idFormularioYaUtilizado => {
					if (idFormularioYaUtilizado == campo.value) error = true;
				});
			}

			if (tipoAtributo == "name") {
				namesFormulario.forEach(nameFormularioYaUtilizado => {
					if (nameFormularioYaUtilizado == campo.value) error = true;
				});
			}
		});

		// Si no se repiten ids y names, entonces se crean las etiquetas en el borrador. Y, se actualizan los arrays
		// idsFormulario y namesFormulario, según sea el caso
		if (!error) {
			switch (inputSeleccionado) {
				case "input-texto":
					borradorFormulario.insertAdjacentHTML("beforeend", `<input type="text" id='${todosLosCamposAAnyadir[0].value}'/>`);
					idsFormulario.push(todosLosCamposAAnyadir[0].value);
					break;
				case "input-password":
					borradorFormulario.insertAdjacentHTML("beforeend", `<input type="password" id='${todosLosCamposAAnyadir[0].value}'/>`);
					idsFormulario.push(todosLosCamposAAnyadir[0].value);
					break;
				case "textarea":
					borradorFormulario.insertAdjacentHTML("beforeend", `<textarea id='${todosLosCamposAAnyadir[0].value}'></textarea>`);
					idsFormulario.push(todosLosCamposAAnyadir[0].value);
					break;
				case "label":
					borradorFormulario.insertAdjacentHTML("beforeend", `<label for='${todosLosCamposAAnyadir[0].value}'>${todosLosCamposAAnyadir[1].value}</label>`);
					break;
				case "img":
					borradorFormulario.insertAdjacentHTML("beforeend", `<img src='${todosLosCamposAAnyadir[0].value}' id='${todosLosCamposAAnyadir[1].value}'/>`);
					idsFormulario.push(todosLosCamposAAnyadir[1].value);
					break;
				case "checkbox":
					borradorFormulario.insertAdjacentHTML("beforeend", `<input type="checkbox" name='${todosLosCamposAAnyadir[0].value}' value='${todosLosCamposAAnyadir[1].value}'/>`);
					namesFormulario.push(todosLosCamposAAnyadir[0].value);
					break;
				case "radio":
					borradorFormulario.insertAdjacentHTML("beforeend", `<input type="radio" name='${todosLosCamposAAnyadir[0].value}' value='${todosLosCamposAAnyadir[1].value}'/>`);
					namesFormulario.push(todosLosCamposAAnyadir[0].value);
					break;
				case "submit":
					borradorFormulario.insertAdjacentHTML("beforeend", `<input type="submit" id='${todosLosCamposAAnyadir[0].value}' value='${todosLosCamposAAnyadir[1].value}'/>`);
					idsFormulario.push(todosLosCamposAAnyadir[0].value);
					break;
				default:
					break;
			}
		} else {
			// Se informa al usuario, en caso de que se esté utilizando ya un id o un name
			if (tipoAtributo == "id") {
				formAnyadirCampoErrorMark.textContent = "El id ya está en el borrador. Por favor, repite la operación con otro valor.";
			} else {
				formAnyadirCampoErrorMark.textContent = "El name ya está en el borrador. Por favor, repite la operación con otro valor.";
			}
		}

		formAnyadirCampoSelect.querySelectorAll("*")[0].selected = true;
		camposAAnyadir.innerHTML = "";
	}
};

const crearFormulario = e => {
	e.preventDefault();

	// Si el borrador tienen elementos, ya se puede crear definitivamente el formulario
	if (borradorFormulario.querySelectorAll("*").length > 0) {
		const formCreados = document.getElementById("div-formularios-creados");
		const nuevoFormulario = document.createElement("form");
		nuevoFormulario.classList.add("nuevo-formulario");
		contadorFormularios++;
		nuevoFormulario.innerHTML = `<h2 class="nuevo-formulario__title">Formulario nº ${contadorFormularios}</h2>`
		const arrElementosNuevoFormulario = borradorFormulario.querySelectorAll("*");
	
		arrElementosNuevoFormulario.forEach(elem => nuevoFormulario.appendChild(elem));
	
		formCreados.appendChild(nuevoFormulario);

		// Se resetean los arrays idsFormulario y namesFormulario para comenzar nuevamente el proceso de crear un borrador
		idsFormulario = [];
		namesFormulario = [];
	}
};

export {camposSelect, anyadirCampo, crearFormulario};