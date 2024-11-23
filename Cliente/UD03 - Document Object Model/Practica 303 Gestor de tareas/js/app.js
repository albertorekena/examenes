"use strict";

let idTarea = 0;
const avisoError = document.getElementById("aviso-error");
// Se inicializa un array en el que se guardarán los nodos de las tareas archivadas y que se mostrarán
// si se hace click en el botón Mostrar
const arrayTareasArchivadas = [];
const tareasArchivadas = document.getElementById("tareas-archivadas");

function crearTarea() {
	const tareaACrear = document.getElementById("tarea-a-crear");

  // Se revisa si el elemento textarea del formulario está vacío o no antes de crear la tarea
	if (tareaACrear.value) {
		anyadirTareaAPendientes(tareaACrear.value)
	} else {
		avisoTextareaVacio();
	}

  tareaACrear.value = "";
}

// Función que crea la tarea en la sección "Pendientes"
function anyadirTareaAPendientes(textoTareaACrear) {
  avisoError.classList.remove("aviso-error--mostrar");
  // Cada vez que se genera una tarea, se genera su nuevo id
  idTarea++;

	document
    .getElementById("tareas-pendientes")
    .insertAdjacentHTML("beforeend", `
      <div class="tareas__tarea" id=${idTarea}>
        <p class="tarea__texto">${textoTareaACrear}</p>
        <div class="botones-fila">
          <button type="button" onclick="borrarTarea(${idTarea})" class="boton">Borrar</button>
          <button type="button" onclick="acabarTarea(${idTarea})" class="boton">Acabar</button>
        </div>
      </div>
    `);
}

function avisoTextareaVacio() {
  avisoError.classList.add("aviso-error--mostrar");
	avisoError.textContent = "No se puede añadir una tarea vacía.";
}

// Función que gestiona el paso de las tareas entre las secciones "Pendientes" a "Acabadas",
// en ambos sentidos
function acabarTarea(id) {
  const tarea = document.getElementById(id);
  const botones = tarea.querySelectorAll("button");

  // Se averigua en cuál de las 2 secciones está la tarea, y se actúa en consecuencia
  if (!tarea.classList.contains("tareas__tarea-acabada")) {
    tarea.classList.add("tareas__tarea-acabada");
    
    botones[0].textContent = "Archivar";
    botones[1].textContent = "Volver";

    document
      .getElementById("tareas-acabadas")
      .appendChild(tarea);
  } else {
    tarea.classList.remove("tareas__tarea-acabada");
    
    botones[0].textContent = "Borrar";
    botones[1].textContent = "Acabar";

    document
      .getElementById("tareas-pendientes")
      .appendChild(tarea);
  }
}

// Función que gestiona el borrado y el archivado de la tarea dependiendo de si se encuentra en
// la sección "Pendientes" o "Acabadas"
function borrarTarea(id) {
  const tarea = document.getElementById(id);

  if (!tarea.classList.contains("tareas__tarea-acabada")) {
    tarea.remove();
  } else {
    tarea.classList.remove("tareas__tarea-acabada");
    tarea.classList.add("tareas-archivadas__tarea");
    // Además de dar estilos a las tareas archivadas antes de meterlas en su array (arrayTareasArchivadas),
    // se desabilitan sus botones
    tarea.querySelectorAll("button").forEach(boton => boton.setAttribute("disabled", true));
    arrayTareasArchivadas.push(tarea);
    tarea.remove();

    // En caso de que se haya hecho click en el botón mostrar, se renueva su contenido
    if (tareasArchivadas.classList.contains("tareas-archivadas--mostrar")) {
      tareasArchivadas.innerHTML = "";
      renderizarTareasArchivadas();
    }
  }
}

function mostrarTareas() {
  // En primer lugar, se averigua si se están mostrando las tareas o no
  if (!tareasArchivadas.classList.contains("tareas-archivadas--mostrar")) {
    tareasArchivadas.classList.add("tareas-archivadas--mostrar");

    if (arrayTareasArchivadas.length > 0) {
      tareasArchivadas.innerHTML = "";
      renderizarTareasArchivadas();
    } else {
      tareasArchivadas.innerHTML = "<p class='tareas-archivadas__no-tareas'>No hay tareas archivadas por mostrar.</p>"
    }
  } else {
    tareasArchivadas.classList.remove("tareas-archivadas--mostrar");
  }
}

// Función que renderiza las tareas archivadas, colocándolas en el orden desde la más reciente a la más antigua
function renderizarTareasArchivadas() {
  arrayTareasArchivadas.forEach(tarea => tareasArchivadas.insertAdjacentHTML("afterbegin", tarea.outerHTML));
}