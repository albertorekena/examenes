<?php
// Ejercicio1 - Ej 230
// Rellena un array con 50 números aleatorios comprendidos entre el 0 y el 99, y luego muéstralo en una lista desordenada.
// Para crear un número aleatorio, utiliza la función rand(inicio, fin)
$numeros_aleatorios_ej230 = array();

for ($i = 0; $i < 50; $i++) { 
	$numeros_aleatorios_ej230[] = rand(0, 99);
}

// Ejercicio1 - Ej 232
// A partir del ejercicio 230, genera un array aleatorio de 33 elementos con números comprendidos entre el 0 y 100 y calcula:
// el mayor, el menor y la media
$numeros_aleatorios_ej232 = array();
$mayor;
$menor;
$suma_total = 0;
$media;

for ($i = 0; $i < 33; $i++) { 
	$numeros_aleatorios_ej232[] = rand(0, 100);
}

sort($numeros_aleatorios_ej232);
$mayor = $numeros_aleatorios_ej232[count($numeros_aleatorios_ej232) - 1];
$menor = $numeros_aleatorios_ej232[0];
foreach ($numeros_aleatorios_ej232 as $numeros_aleatorio) {
	$suma_total += $numeros_aleatorio;
}
$media = $suma_total / count($numeros_aleatorios_ej232);


// Ejercicio 2
$frutas = ["naranja", "pera", "manzana"];

array_splice($frutas, 1, 0, array("plátano"));


// Ejercicio 3
$estudiantes = ["Ana"=>8.5, "Juan"=>9.2, "Luis"=>7.8, "Marta"=>6.4, "Sofía"=>9.0];
$suma_total_notas = 0;

foreach ($estudiantes as $nota) {
	$suma_total_notas += $nota;
}

$nota_media = $suma_total_notas / count($estudiantes);
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
	<title>Ejercicios22 Bucles y Arrays - Alberto Requena Sáez</title>
	<style>
		body {
			font-family: Arial, Helvetica, sans-serif;
		}
	</style>
</head>
<body>
	<div style="width: 368px; margin: 0 auto;">
		<h1 style="text-align: center;">Ejercicios22 Bucles y Arrays - Alberto Requena Sáez</h1>
		
		<h2 style="text-align: center;">Ejercicio1 - Ej 230</h2>
		<h3 style="text-align: center;">La lista de números aleatorios es:</h3>
		<ul>
			<?php foreach ($numeros_aleatorios_ej230 as $numeros_aleatorio): ?>
		<li><?= $numeros_aleatorio; ?></li>
		<?php endforeach; ?>
	</ul>
	<br>
	<hr>
	<br>

	<h2 style="text-align: center;">Ejercicio1 - Ej 232</h2>
	<h3 style="text-align: center;">El mayor, menor y media son:</h3>
	<ul>
		<li>Mayor -> <?= $mayor; ?></li>
		<li>Menor -> <?= $menor; ?></li>
		<li>Media -> <?= $media; ?></li>
	</ul>
	<br>
	<hr>
	<br>

	<h2 style="text-align: center;">Ejercicio 2</h2>
	<h3 style="text-align: center;">El array final sería:</h3>
	<pre>
		<?php print_r($frutas); ?>
	</pre>
	<br>
	<hr>
	<br>

	<h2 style="text-align: center;">Ejercicio 3</h2>
	<h3 style="text-align: center;">El nombre y la nota de los estudiantes es:</h3>
	<ul>
		<?php foreach ($estudiantes as $nombre => $nota): ?>
			<li><?= $nombre.": ".$nota; ?></li>
			<?php endforeach; ?>
			<li><strong><u>Nota Media: <?= $nota_media; ?></u></strong></li>
		</ul>
	</div>
</body>
</html>