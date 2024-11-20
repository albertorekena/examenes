<?php
$numero;
$mensaje_error = "";

if (isset($_GET["submit"])) {
  $numero = $_GET["numero"];
  
  if (is_numeric($numero) && $numero >= 1 && $numero <= 9) {
  } else {
    $mensaje_error = "Error: introduce un número entre 1 y 9.";
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ejercicio2 - Alberto Requena Sáez</title>
</head>
<body>
  <div style="width: 768px; margin: 0 auto;">
    <?php if ($mensaje_error) echo "<mark>".$mensaje_error."</mark>"; ?>

    <h3 style="text-align: center;">ejercicio2 <br> Introduce un número entre el 1 y el 9 para mostrar sus tablas de multiplicar</h3>

    <form action="" method="GET">
      <div>
        <label for="numero">numero: </label>
        <input type="number" name="numero" placeholder="Ej. 1">
      </div>
      <input type="submit" name="submit" value="obtener tablas">
    </form>

    <?php if (isset($_GET["submit"]) && !$mensaje_error): ?>
    <?= "<br>"; ?>
    <h4>Has introducido el valor numero=<?= $numero ?>, y su tabla de multiplicar</h4>
    <?php for ($i = 1; $i <= 10; $i++): ?>
    <?= $i." * ".$numero." = ".($i * $numero)."<br>"; ?>
    <?php endfor; ?>
    <?php endif; ?>
  </div>
</body>
</html>