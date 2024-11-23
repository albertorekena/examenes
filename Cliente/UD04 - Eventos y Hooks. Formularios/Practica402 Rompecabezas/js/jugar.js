import {alertaFinalPartida} from "./funciones.js";

const jugar = () => {
	let elementoAgarrado = null;
	let piezasColocadasCorrectamente = 0;

	const piezasInicial = document.getElementById("piezas-inicial");

	piezasInicial
		.querySelectorAll(".piezas-inicial__img-item")
		.forEach(img => img.addEventListener("dragstart", e => elementoAgarrado = e.target));

	// Las 3 siguientes siguientes líneas (y, varias más posteriores) controlan las imágenes cuando son dejadas en piezas-final
	const piezasFinal = document.getElementById("piezas-final");
	piezasFinal.addEventListener("dragover", e => e.preventDefault());
	piezasFinal.addEventListener("drop", e => {
		e.preventDefault();

		if (e.target.matches(".piezas-final__div-item")) {
			elementoAgarrado.parentNode.removeChild(elementoAgarrado);
			e.target.appendChild(elementoAgarrado);

			if (piezasInicial.querySelectorAll(".piezas-inicial__img-item").length == 0) {
				piezasFinal
					.querySelectorAll(".piezas-final__div-item")
					.forEach(div => {
						if (div.dataset.id == div.children[0].dataset.id) piezasColocadasCorrectamente++;
					});

					alertaFinalPartida(piezasColocadasCorrectamente == 9);
			}
		}
	});

	// Las 2 siguientes siguientes líneas (y, varias más posteriores) controlan las imágenes cuando son dejadas en piezas-inicial
	piezasInicial.addEventListener("dragover", e => e.preventDefault());
	piezasInicial.addEventListener("drop", e => {
		e.preventDefault();

		piezasColocadasCorrectamente = 0;

		if (e.target.matches(".piezas-inicial__div-item")) {
			elementoAgarrado.parentNode.removeChild(elementoAgarrado);
			e.target.appendChild(elementoAgarrado);
		}
	});
};

export default jugar;