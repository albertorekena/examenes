"use strict";

const todosLosNodos = document.body.getElementsByTagName("*");

for (let i = 0; i < todosLosNodos.length; i++) {
	// Con una expresión regular se localiza la palabra "sexo", independientemente de mayúsculas y minúsculas.
	// Si el nodo contiene la palabra "sexo", se sustituye completamente.
	if (todosLosNodos[i].textContent.match(/sexo/i)) {
		todosLosNodos[i].innerHTML = "<p class='contenido-bloqueado'>Contenido Bloqueado</p>"
	}
}