<?php
$edad;
$categoria;
$mensaje_error = "";

if (isset($_GET["submit"])) {
  $edad = $_GET["edad"];

  if (is_numeric($edad) && $edad >= 0 && $edad <= 150) {
    $edad = (float)$edad;

		if ($edad < 12) {
			$categoria = "niño";
		} else if ($edad >= 12 && $edad < 18) {
			$categoria = "adolescente";
		} else if ($edad >= 18 && $edad < 65) {
			$categoria = "adulto";
		} else {
			$categoria = "persona mayor";
		}
  } else {
    $mensaje_error = "Error: introduce una edad válida.";
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ejercicio4 - Alberto Requena Sáez</title>
</head>
<body>
	<div style="width: 768px; margin: 0 auto;">
		<?php if ($mensaje_error) echo "<mark>".$mensaje_error."</mark>"; ?>

		<h3 style="text-align: center;">ejercicio4 <br> Introduce la edad de la persona para categorizarla</h3>

		<form action="" method="GET">
			<div>
				<label for="edad">edad: </label>
				<input type="number" name="edad" placeholder="Ej. 18" id="edad">
			</div>
			<input type="submit" name="submit" value="categorizar">
		</form>

		<?php if (isset($_GET["submit"]) && !$mensaje_error): ?>
			<h4>Has introducido la edad de <?= $edad ?> años que se corresponde con la categoría <u><?= $categoria; ?></u></h4>
		<?php endif; ?>
	</div>
</body>
</html>