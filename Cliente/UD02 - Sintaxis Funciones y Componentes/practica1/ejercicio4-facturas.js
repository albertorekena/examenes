"use strict";

// Añadidos argumentos por defecto, por si no se envían cuando se ejecuta la función
function imprimirFactura(nombreProducto, precio = 100, impuesto = 21) {
	if (typeof precio === "number" && typeof impuesto === "number") {
		console.log("Producto: " + nombreProducto + " - " + "Precio: " + (precio * ((100 + impuesto) / 100))); 
	} else {
		console.log("Error. Número(s) no valido(s)");
	}
}

console.log("\n\n");
imprimirFactura("Producto Genérico");
imprimirFactura("Producto Genérico", null, null);
imprimirFactura("Pelota", 50);
imprimirFactura("TV FHD", 875);
console.log("\n\n");