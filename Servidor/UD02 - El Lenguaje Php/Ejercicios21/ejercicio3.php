<?php
$numero;
$par_o_impar;
$mensaje_error = "";

if (isset($_GET["submit"])) {
  $numero = $_GET["numero"];

  if (is_numeric($numero)) {
    $numero = (float)$numero;

		$par_o_impar = $numero % 2 == 0 ? "par" : "impar"; 
  } else {
    $mensaje_error = "Error: introduce un número en el formulario.";
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ejercicio3 - Alberto Requena Sáez</title>
</head>
<body>
	<div style="width: 768px; margin: 0 auto;">
		<?php if ($mensaje_error) echo "<mark>".$mensaje_error."</mark>"; ?>

		<h3 style="text-align: center;">ejercicio3 <br> Introduce 1 número y determina si es par o impar</h3>

		<form action="" method="GET">
			<div>
				<label for="numero">numero: </label>
				<input type="number" name="numero" placeholder="Ej. 1" id="numero">
			</div>
			<input type="submit" name="submit" value="dividir">
		</form>

		<?php if (isset($_GET["submit"]) && !$mensaje_error): ?>
			<h4>Has introducido el numero <?= $numero ?> y es <u><?= $par_o_impar; ?></u></h4>
		<?php endif; ?>
	</div>
</body>
</html>