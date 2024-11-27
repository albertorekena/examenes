"use strict";

function mostrandoII(objeto) {
  Object.keys(objeto).forEach(key => {
    let tipoObjeto = typeof objeto[key];

    if (tipoObjeto == "string" || tipoObjeto == "number") {
      console.log(key + " --> " + objeto[key] + " --> " + tipoObjeto);
    }

    if (tipoObjeto == "function") {
      console.log(key + " --> " + "función" + " --> " + tipoObjeto);
    }

    if (tipoObjeto == "object") {
      if (Array.isArray(objeto[key])) {
        console.log(key + " --> " + "array" + " --> " + "array" + ". En su interior tiene:");
      } else {
        console.log(key + " --> " + "objeto" + " --> " + tipoObjeto + ". En su interior tiene:");
      }

      mostrandoII(objeto[key]);
    }
  });
}

mostrandoII({
  cadena:"hola!",
  numero:1,
  arreglo:["a", "b", "c"],
  funcion:function () {console.log("adios!")},
  otroObjeto:{cadena:"Otro hola!"}
});