// NOTA: Hay código que se podría simplificar, pero el proceso para conseguirlo no es sencillo y abarca mucho tiempo.
// Así que he preferido dejarlo en el estado actual: funciona correctamente y se encuentra en el paso previo a simplificarlo.

const nombre = document.getElementById("nombre");
const labelNombre = document.querySelector("label[for='nombre']");
const grupo = document.getElementById("grupo");
const labelGrupo = document.querySelector("label[for='grupo']");
const anyoPublicacion = document.getElementById("anyo-publicacion");
const labelAnyoPublicacion = document.querySelector("label[for='anyo-publicacion']");
const tipoMusica = document.getElementById("tipo-musica");
const labelTipoMusica = document.querySelector("label[for='tipo-musica']");
const localizacion = document.getElementById("localizacion");
const labelLocalizacion = document.querySelector("label[for='localizacion']");
const prestado = document.getElementById("prestado");
const success = document.getElementById("success");

const guardar = () => {
	let disco = null;
	const divDiscos = document.getElementById("div-discos");

  divDiscos.innerHTML = "";

	if (
		validarRegExpMin5Caracteres(nombre.value)
		&& validarRegExpMin5Caracteres(grupo.value)
		&& (anyoPublicacion.value && !!anyoPublicacion.value.match(/^[0-9]{4}$/))
		&& tipoMusica.value
		&& (localizacion.value && !!localizacion.value.match(/^ES-[0-9]{3}[A-Z]{2}$/))
	) {
    disco = {
      nombre:nombre.value,
      grupo:grupo.value,
      anyoPublicacion:anyoPublicacion.value,
      tipoMusica:tipoMusica.value,
      localizacion:localizacion.value,
      prestado:prestado.checked
    };

		success.textContent = "Formulario enviado correctamente :)";

		nombre.value = "";
		grupo.value = "";
		anyoPublicacion.value = "";
		tipoMusica.getElementsByTagName("option")[0].selected = "selected";
		localizacion.value = "";
		prestado.checked = false;
	} else {
		if (!validarRegExpMin5Caracteres(nombre.value)) {
      labelNombre.classList.add("color-red");
      nombre.classList.add("border-red");
    }

    if (!validarRegExpMin5Caracteres(grupo.value)) {
      labelGrupo.classList.add("color-red");
      grupo.classList.add("border-red");
    }
    
    if (!anyoPublicacion.value || !anyoPublicacion.value.match(/^[0-9]{4}$/)) {
      labelAnyoPublicacion.classList.add("color-red");
      anyoPublicacion.classList.add("border-red");
    }

    if (!tipoMusica.value) {
      labelTipoMusica.classList.add("color-red");
      tipoMusica.classList.add("border-red");
    }

    if (!localizacion.value || !localizacion.value.match(/^ES-[0-9]{3}[A-Z]{2}$/)) {
      labelLocalizacion.classList.add("color-red");
      localizacion.classList.add("border-red");
    }
	}

	return disco;
};

const validarRegExpMin5Caracteres = cadena => {
  return cadena && !!cadena.match(/^.{1,5}$/);
};

const cambiarFormatoCampo = e => {
  // En cualquier caso, cuando se vuelve a completar un campo, el mensaje de success es borrado
	success.innerHTML = "&nbsp;";

  switch (e.target.id) {
    case "nombre":
      if (validarRegExpMin5Caracteres(nombre.value)) {
        labelNombre.classList.remove("color-red");
        nombre.classList.remove("border-red");
      } else {
        labelNombre.classList.add("color-red");
        nombre.classList.add("border-red");
      }
      break;
    case "grupo":
      if (validarRegExpMin5Caracteres(grupo.value)) {
        labelGrupo.classList.remove("color-red");
        grupo.classList.remove("border-red");
      } else {
        labelGrupo.classList.add("color-red");
        grupo.classList.add("border-red");
      }
      break;
    case "anyo-publicacion":
      if (anyoPublicacion.value && !!anyoPublicacion.value.match(/^[0-9]{4}$/)) {
        labelAnyoPublicacion.classList.remove("color-red");
        anyoPublicacion.classList.remove("border-red");
      } else {
        labelAnyoPublicacion.classList.add("color-red");
        anyoPublicacion.classList.add("border-red");
      }
      break;
    case "tipo-musica":
      if (tipoMusica.value) {
        labelTipoMusica.classList.remove("color-red");
        tipoMusica.classList.remove("border-red");
      } else {
        labelTipoMusica.classList.add("color-red");
        tipoMusica.classList.add("border-red");
      }
      break;
    case "localizacion":
      if (localizacion.value && !!localizacion.value.match(/^ES-[0-9]{3}[A-Z]{2}$/)) {
        labelLocalizacion.classList.remove("color-red");
        localizacion.classList.remove("border-red");
      } else {
        labelLocalizacion.classList.add("color-red");
        localizacion.classList.add("border-red");
      }
      break;
    default:
      break;
  }
};

export {guardar, cambiarFormatoCampo};