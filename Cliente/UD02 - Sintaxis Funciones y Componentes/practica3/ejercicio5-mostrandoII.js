"use strict";

function mostrandoII(objeto) {
  Object.keys(objeto).forEach(key => {
    let tipoObjeto = typeof objeto[key];

    if (tipoObjeto == "string" || tipoObjeto == "number") {
      console.log(key + " --> " + objeto[key] + " --> " + tipoObjeto);
    }

    if (tipoObjeto == "array") {
      console.log(key + " --> " + "[" + objeto[key].join(", ") + "]" + "--> " + tipoObjeto);
    }

    if (tipoObjeto == "function") {
      console.log(key + " --> " + "función" + " --> " + tipoObjeto);
    }

    if (tipoObjeto == "object") {
      console.log(key + "--> " + "objeto" + " --> " + tipoObjeto + " (en su interior tiene:)");
      // Para imprimir el contenido del objeto, se utiliza la técnica de recurrencia, y así
      // se puede imprimir con facilidad el anidamiento de objetos en los atributos
      mostrandoII(objeto[key]);
    }
  });
}

console.log("\n\n");
mostrandoII({
  cadena:"hola!",
  numero:1,
  arreglo:["a", "b", "c"],
  funcion:function () {console.log("adios!")},
  otroObjeto:{cadena:"Otro hola!"}
});
console.log("\n\n");