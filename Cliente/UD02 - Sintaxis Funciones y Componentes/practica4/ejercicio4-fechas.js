"use strict";

// En el método (new Date()).getDay() 0 indica "Domingo", por ello la forma de diasSemana 
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agost", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const datetime = new Date();
console.log("\n\n");
console.log(diasSemana[datetime.getDay()] + ", " + datetime.getDate() + " de " + meses[datetime.getMonth()] + " de " + datetime.getFullYear());
console.log("\n\n");