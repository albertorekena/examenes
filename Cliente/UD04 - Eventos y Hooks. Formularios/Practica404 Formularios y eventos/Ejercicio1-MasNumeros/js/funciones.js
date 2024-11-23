const crearCheckBoxes = () => {
	const numeroMaximo = 1000;
	const numeroMinimo = 100;

	const main = document.getElementById("main");

	for (let i = 0; i < 100; i++) {
		const numero = Math.floor((Math.random() * (numeroMaximo + 1 - numeroMinimo)) + 100);
		main.insertAdjacentHTML("beforeend", `
			<div>
				<input type="checkbox" value="${numero}" id="numero-${numero}" />
				<label for="numero-${numero}">${numero}</label>
			</div>
		`);
	}
};

const marcarTodosLosPares = todosLosCheckbox => {
	todosLosCheckbox.forEach(checkbox => {
		// Se utiliza el atributo checked para saber si un checkbox está marcado o no
		if (checkbox.value % 2 == 0) checkbox.checked = true;
	});
};

const desmarcarTodos = todosLosCheckbox => {
	todosLosCheckbox.forEach(checkbox => {
		checkbox.checked = false
	});
};

export {crearCheckBoxes, marcarTodosLosPares, desmarcarTodos};