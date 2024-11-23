"use strict";

// Se crea el array inicial con las ubicaciones de las imágenes
const imagenesArray = ["fea", "feo", "feas", "feos"].map(nomImagen => "img/" + nomImagen + ".jpg");

// Se localiza la etiqueta img en la que se van a ir realizando los cambios de: imágenes, opacidad y posición
const imgTag = document.getElementById("img");
// Se recogen las dimensiones de la imagen inicial que está en el html
const propiedadesImgTag = imgTag.getBoundingClientRect();
const anchuraImagenes = propiedadesImgTag.width;
const alturaImagenes = propiedadesImgTag.height;

// Se le da al div que contiene la imagen las propiedades adecuadas para el ejercicio
imgTag.parentElement.setAttribute("style", `width:${anchuraImagenes}px; height:${alturaImagenes}px`);

// Se crean las variables que se utilizarán en la animación, y se coloca la imagen en la posición inicial (fuera del div)
const opacidadInicial = 1;
let opacidad;
const posicionInicialX = -anchuraImagenes;
let posicionX;
imgTag.setAttribute("style", `left:${posicionInicialX}px;`);

// Se determinan las variables que modifican el comportamiento del carrusel
// Con un step inferior a 5 milisegundos se pueden dar fácilmente problemas de "flickering"
const tiempo = 5000;
const step = 5;

// "i" es la variable que indicará la imagen a mostrar
let i = 0;

// El cambio de imágenes se realiza con setInterval
setInterval(() => {
  // Ambas variables son utilizadas en la transformación, que será llevada a cabo con otro setInterval que se define en la línea 43
  let transformacion;
  let stepAcumulado = 0;
  let contador = 1;

  // Al inicio de cada ciclo de setInterval, se establecen las condiciones iniciales de cada "slide": imagen, posición y opacidad
  clearInterval(transformacion);
  imgTag.setAttribute("src", imagenesArray[i]);
  imgTag.setAttribute("style", `left:${posicionInicialX}; opacity:${opacidadInicial}`);

  transformacion = setInterval(() => {
    // Se establecen la opacidad y la posición para cada "step"
    opacidad = 1 - (stepAcumulado / tiempo);
    posicionX = posicionInicialX + (2 * anchuraImagenes * (stepAcumulado / tiempo));

    imgTag.setAttribute("style", `left:${posicionX}px; opacity:${opacidad}`);

    // Una vez ejecutado el "step", se prepara la configuración para el siguiente
    stepAcumulado = step * contador;
    contador++;

    // Cuando la transformación supera el "tiempo" de permanencia de cada slide, se reinician variables
    if (stepAcumulado >= tiempo) {
      stepAcumulado = 0;
      contador = 1;
      opacidad = opacidadInicial;
      posicionX = posicionInicialX;
    };
  }, step);

  // Al final de cada ejecución se modifica el contador que controla la imagen a mostrar para el siguiente intervalo
  if (i < imagenesArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
}, tiempo);