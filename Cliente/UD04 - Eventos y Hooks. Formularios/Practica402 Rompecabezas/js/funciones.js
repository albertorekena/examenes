const iniciarTableros = () => {
	tableroInicial();
	tableroFinal();
	// Se crea "alturaPiezasDivItem" para que el código sea más flexible, y se puedan sustituir las imágenes actuales por otras con
	// diferentes dimensiones
	alturaPiezasDivItem();
};

const tableroInicial = () => {
	let arrEtiquetasHtmlImagenesOrdenado = [];
	let piezasInicialDiv;

	["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(item => {
		arrEtiquetasHtmlImagenesOrdenado.push(`
			<div class="piezas-inicial__div-item">
				<img src=img/${item}.png alt="imagen puzzle" data-id="${item}" class="piezas-inicial__img-item">
			</div>
		`);
				
	});

	let arrEtiquetasHtmlImagenesDesordenado = randomizarArray([...arrEtiquetasHtmlImagenesOrdenado]);

	piezasInicialDiv = document.createElement("div");
	piezasInicialDiv.classList.add("piezas-inicial");
	piezasInicialDiv.setAttribute("id", "piezas-inicial");
	document.getElementById("tableros").appendChild(piezasInicialDiv);

	document.getElementById("piezas-inicial").innerHTML = arrEtiquetasHtmlImagenesDesordenado.join("");
};

const tableroFinal = () => {
	let piezasFinalDiv;
	
	const arrayHtmlTableroFinal = [];

	for (let i = 1; i <= 9; i++) {
		arrayHtmlTableroFinal.push(`<div class='piezas-final__div-item' data-id=${i}></div>`);
	}

	piezasFinalDiv = document.createElement("div");
	piezasFinalDiv.classList.add("piezas-final");
	piezasFinalDiv.setAttribute("id", "piezas-final");
	document.getElementById("tableros").appendChild(piezasFinalDiv);

	document.getElementById("piezas-final").innerHTML = arrayHtmlTableroFinal.join("");
};

const randomizarArray = (arr) => {
	let ultimoItem = arr.length - 1;
	let randomI;

	while (ultimoItem > 0) {
		randomI = Math.floor(Math.random() * ultimoItem);
		// Se intercambia el último item del array por otro aleatorio
		[arr[ultimoItem], arr[randomI]] = [arr[randomI], arr[ultimoItem]];
		ultimoItem--;
	}

	return arr;
};

const alturaPiezasDivItem = () => {
	setTimeout(() => {
		const alturaPrimeraImagen = document.querySelector(".piezas-inicial__img-item").getBoundingClientRect().height;

		setAltura(".piezas-inicial__div-item", alturaPrimeraImagen);
		setAltura(".piezas-final__div-item", alturaPrimeraImagen);
	}, 20);
};

const setAltura = (selector, altura) => {
	document
		.querySelectorAll(selector)
		.forEach(div => div.setAttribute("style", `height:${altura}px`));
};

const alertaFinalPartida = isGana => {
	setTimeout(() => {
		isGana
			? alert("¡Enhorabuena! Has realizado el puzle correctamente :)")
			: alert(":( Cometiste algún error.");
	}, 20);
};

export {iniciarTableros, alertaFinalPartida};