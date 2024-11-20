<?php
// Ejercicio 320

echo "<u>Ejercicio 320</u><br>";
echo "<br>";
include "Soporte.php";
$soporte1 = new Soporte("Tenet", 22, 3); 
echo "<strong>".$soporte1->titulo."</strong>"; 
echo "<br>Precio: ".$soporte1->getPrecio()." euros"; 
echo "<br>Precio IVA incluido: ".$soporte1->getPrecioConIVA()." euros";
echo "<br>";
$soporte1->muestraResumen();

echo "<br>";
echo "<br>";
echo "------------------------------------------------------";
echo "<br>";
echo "<br>";

// Ejercicio 321
echo "<u>Ejercicio 321</u><br>";
echo "<br>";
include "CintaVideo.php";
$miCinta = new CintaVideo("Los cazafantasmas", 23, 3.5, 107); 
echo "<strong>".$miCinta->titulo."</strong>"; 
echo "<br>Precio: ".$miCinta->getPrecio()." euros"; 
echo "<br>Precio IVA incluido: ".$miCinta->getPrecioConIva()." euros";
echo "<br>";
$miCinta->muestraResumen();

echo "<br>";
echo "<br>";
echo "------------------------------------------------------";
echo "<br>";
echo "<br>";

// Ejercicio 322
echo "<u>Ejercicio 322</u><br>";
echo "<br>";
include "Dvd.php";
$miDvd = new Dvd("Origen", 24, 15, "es,en,fr", "16:9"); 
echo "<strong>".$miDvd->titulo."</strong>"; 
echo "<br>Precio: ".$miDvd->getPrecio()." euros"; 
echo "<br>Precio IVA incluido: ".$miDvd->getPrecioConIva()." euros";
echo "<br>";
$miDvd->muestraResumen();

echo "<br>";
echo "<br>";
echo "------------------------------------------------------";
echo "<br>";
echo "<br>";

// Ejercicio 323
echo "<u>Ejercicio 323</u><br>";
echo "<br>";
include "Juego.php";
$miJuego = new Juego("The Last of Us Part II", 26, 49.99, "PS4", 1, 1); 
echo "<strong>".$miJuego->titulo."</strong>"; 
echo "<br>Precio: ".$miJuego->getPrecio()." euros"; 
echo "<br>Precio IVA incluido: ".$miJuego->getPrecioConIva()." euros";
echo "<br>";
$miJuego->muestraResumen();