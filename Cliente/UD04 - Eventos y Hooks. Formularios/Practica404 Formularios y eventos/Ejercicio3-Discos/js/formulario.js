// Se le llama formulario a este archivo, en lugar de funciones, porque se tiene una variable compartida ("formulario")
let isSuccessYaMostrado = false;

const guardar = () => {
	const nombre = document.getElementById("nombre");
	const grupo = document.getElementById("grupo");
	const anyoPublicacion = document.getElementById("anyo-publicacion");
	const tipoMusica = document.getElementById("tipo-musica");
	const localizacion = document.getElementById("localizacion");
	const prestado = document.getElementById("prestado");
	const errorNombre = document.getElementById("error-nombre");
	const errorGrupo = document.getElementById("error-grupo");
	const errorAnyoPublicacion = document.getElementById("error-anyo-publicacion");
	const errorTipoMusica = document.getElementById("error-tipo-musica");
	const errorLocalizacion = document.getElementById("error-localizacion");
  const success = document.getElementById("success");

	let disco = null;
	const divDiscos = document.getElementById("div-discos");

  divDiscos.innerHTML = "";

  // Hay campos que, además de estar rellenados, tienen que cumplir ciertas condiciones para ser aceptados.
  // Si no se mostrarán mensajes de error
	if (
		nombre.value
		&& grupo.value
		&& (
      anyoPublicacion.value
      // Con !! se transforma un valor en booleano
      && !!anyoPublicacion.value.match(/^\d+$/)
      && (anyoPublicacion.value >= 1900 && anyoPublicacion.value <= new Date().getFullYear())
    )
		&& tipoMusica.value
		&& (localizacion.value && !!localizacion.value.match(/^[a-zA-Z0-9]+$/))
	) {
    disco = {
      nombre:nombre.value,
      grupo:grupo.value,
      anyoPublicacion:anyoPublicacion.value,
      tipoMusica:tipoMusica.value,
      localizacion:localizacion.value,
      prestado:prestado.checked
    };

    nombre.value = "";
    grupo.value = "";
    anyoPublicacion.value = "";
    tipoMusica.getElementsByTagName("option")[0].selected = "selected";
    localizacion.value = "";
    prestado.checked = false;

    success.textContent = "Formulario enviado correctamente :)"
    isSuccessYaMostrado = true;
    errorNombre.textContent = "";
    errorGrupo.textContent = "";
    errorAnyoPublicacion.textContent = "";
    errorTipoMusica.textContent = "";
    errorLocalizacion.textContent = "";
	} else {
		if (!nombre.value) {
			errorNombre.textContent = "tienes que introducir un nombre válido.";
		}

		if (!grupo.value) {
			errorGrupo.textContent = "tienes que introducir un grupo válido.";
		}

    if (!anyoPublicacion.value.match(/^\d+$/)) {
      errorAnyoPublicacion.textContent = "tienes que introducir un dato válido en el año de publicación";
    }

    // Si sí que se ha introducido en "año publicación" un número de 4 cifras pero no está entre 1900 y el año actual,
    // aparece un mensaje de error
    if (
      !!anyoPublicacion.value.match(/^\d+$/)
      && (anyoPublicacion.value < 1900 || anyoPublicacion.value > new Date().getFullYear())
    ) {
      errorAnyoPublicacion.textContent = "tienes que introducir un año de publicación válido";
    }

		if (!tipoMusica.value) {
			errorTipoMusica.textContent = "tienes que introducir un tipo de música válido";
		}

    if (!localizacion.value.match(/^[a-zA-Z0-9]+$/)) {
      errorLocalizacion.textContent = "tienes que introducir una localización válida";
    }

    isSuccessYaMostrado = false;
	}

	return disco;
};

const borrarSuccess = () => {
  if (isSuccessYaMostrado) success.innerHTML = "&nbsp;";
};

const mostrarDiscos = discos => {
  const divDiscos = document.getElementById("div-discos");
  divDiscos.innerHTML = "";
  const arrHtmlDivDiscos = [];

  arrHtmlDivDiscos.push("<h2 class='discos__title'>Discos</h2>");

  if (discos.length > 0) {
    let htmlDisco;

    discos.forEach(disco => {
      htmlDisco = `
        <div class="discos__disco">
          <p><span class="discos__key">nombre</span>: ${disco.nombre}</p>
          <p><span class="discos__key">grupo</span>: ${disco.grupo}</p>
          <p><span class="discos__key">año publicación</span>: ${disco.anyoPublicacion}</p>
          <p><span class="discos__key">tipo música</span>: ${disco.tipoMusica}</p>
          <p><span class="discos__key">localización</span>: ${disco.localizacion}</p>
          <p><span class="discos__key">prestado</span>: ${disco.prestado ? "Sí" : "No"}</p>
        </div>
      `;

      arrHtmlDivDiscos.push(htmlDisco);
    });
  } else {
    arrHtmlDivDiscos.push("<p>no hay discos para mostrar :(");
  }

  divDiscos.insertAdjacentHTML("beforeend", arrHtmlDivDiscos.join(""));
};

export {guardar, borrarSuccess, mostrarDiscos};