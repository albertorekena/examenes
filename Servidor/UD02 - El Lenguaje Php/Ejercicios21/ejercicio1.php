<?php
$numero1;
$numero2;
$suma;
$resta;
$multiplicacion;
$division;
$mensaje_error = "";

if (isset($_GET["submit"])) {
  $numero1 = $_GET["numero1"];
  $numero2 = $_GET["numero2"];

  if (is_numeric($numero1) && is_numeric($numero2)) {
    $numero1 = (float)$numero1;
    $numero2 = (float)$numero2;

    if ($numero2 != 0) {
      $suma = $numero1 + $numero2;
      $resta = $numero1 - $numero2;
      $multiplicacion = $numero1 * $numero2;
      $division = $numero1 / $numero2;
    } else {
      $mensaje_error = "Error: introduce un numero2 distinto de 0 para poder realizar la división.";
    }
  } else {
    $mensaje_error = "Error: introduce números en el formulario.";
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ejercicio1 - Alberto Requena Sáez</title>
</head>
<body>
  <div style="width: 768px; margin: 0 auto;">
    <?php if ($mensaje_error) echo "<mark>".$mensaje_error."</mark>"; ?>

    <h3 style="text-align: center;">ejercicio1 <br> Introduce 2 números para sumarlos, restarlos, multiplicarlos y dividirlos</h3>

    <form action="" method="GET">
      <div>
        <label for="numero1">numero1: </label>
        <input type="number" name="numero1" placeholder="Ej. 1" id="numero1">
      </div>
      <div>
        <label for="numero2">numero2: </label>
        <input type="number" name="numero2" placeholder="Ej. 2" id="numero2">
      </div>
      <input type="submit" name="submit" value="operar">
    </form>

    <?php if (isset($_GET["submit"]) && !$mensaje_error): ?>
      <h4>Has introducido los valores numero1=<?= $numero1 ?> y numero2=<?= $numero2 ?></h4>
      <p>El resultado de la suma es: <?= $suma; ?></p>
      <p>El resultado de la resta es: <?= $resta; ?></p>
      <p>El resultado de la division es: <?= $division; ?></p>
      <p>El resultado de la multiplicacion es: <?= $multiplicacion; ?></p>
    <?php endif; ?>
  </div>
</body>
</html>