"use strict";

const pesoMarcos = 60;
const alturaMarcos = 1.60;
const pesoJuan = 85;
const alturaJuan = 1.85;

function imc(peso, altura) {
  // .toFixed() crea un string, por eso es parseado
  return parseFloat(peso / (altura * altura)).toFixed(2);
}

const imcMarcos = imc(pesoMarcos, alturaMarcos);
const imcJuan = imc(pesoJuan, alturaJuan);

console.log("El IMC de Marcos es: " + imcMarcos);
console.log("El IMC de Juan es: " + imcJuan);
console.log("¿Tiene Marcos un IMC menor que el de Juan?: " + (imcMarcos < imcJuan));