<?php
  require_once "funciones.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicios 2.3 Funciones, Bucles y Arrays - Alberto Requena Sáez</title>
</head>
<body>
  <div style="width:720px; margin: 0 auto; font-family: Arial;">
    <h1 style="text-align:center;">Ejercicios 2.3 Funciones, Bucles y Arrays - Alberto Requena Sáez</h1>

    <br>

    <h2 style="text-align:center;">Ejercicio 1 - Cambio Dólar Euro</h2>
    <p>1000 Dólares son: <u><?= Dolar2euros(1000); ?></u> Euros.</p>
    <p>1000 Euros son: <u><?= euros2Dolar(1000); ?></u> Dólares.</p>

    <br>
    <hr>
    <br>

    <h2 style="text-align:center;">Ejercicio 2 - Sumar los Elementos de un Array</h2>
    <p>Para <?= print_r($array_prueba, true); ?>, tenemos que la suma es <u><?= sumarItemsArray($array_prueba); ?></u></p>
    <p>Para <?= print_r($array_prueba, true); ?>, si consideramos un multiplicador de 5, tenemos que la suma es <u><?= sumarItemsArray($array_prueba, 5); ?></u></p>
    <p>El array original ahora es <u><?= print_r($array_prueba, true); ?></u></p>

    <br>
    <hr>
    <br>

    <h3 style="text-align:center;">Ejercicio 3 - Combinador de Cadenas</h2>
    <p>
      Para los strings <?= $cadena1.", ".$cadena2." y ".$cadena3; ?>, la función "combinador_cadenas" da como resultado ->
      <?= combinador_cadenas(" ", $cadena1, $cadena2, $cadena3); ?>
    </p>

    <br>
    <hr>
    <br>

    <h3 style="text-align:center;">Ejercicio 4 - Filtrador Pares</h2>
    <p>Para <?= print_r($array_numeros_caso1, true); ?>, si filtramos los pares, tenemos: <u><?= print_r(filtrador_pares($array_numeros_caso1), true); ?></u></p>
    <p>Utilizando un array idéntico al del caso anterior, tenemos <?= print_r($array_numeros_caso2, true); ?>, y si no filtramos, resulta: <u><?= print_r(filtrador_pares($array_numeros_caso2, true), true); ?></u></p>
  </div>
</body>
</html>