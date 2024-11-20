<?php
$numero1;
$numero2;
$mensaje_error = "";
$operacion;
$resultado;

if (isset($_GET["submit"])) {
  $numero1 = $_GET["numero1"];
  $numero2 = $_GET["numero2"];
	$operacion = $_GET["operacion"];

  if (is_numeric($numero1) && is_numeric($numero2)) {
    $numero1 = (float)$numero1;
    $numero2 = (float)$numero2;

		switch ($operacion) {
			case "sumar":
				$resultado = $numero1 + $numero2;
				break;
			case "restar":
				$resultado = $numero1 - $numero2;
				break;
			case "multiplicar":
				$resultado = $numero1 * $numero2;
				break;
			case "dividir":
				if ($numero2 != 0) {
					$division = $numero1 / $numero2;
				} else {
					$mensaje_error = "Error: introduce un numero2 distinto de 0 para poder realizar la división.";
				}
				break;
			default:
				break;
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
  <title>ejercicio5 - Alberto Requena Sáez</title>
</head>
<body>
	<div style="width: 768px; margin: 0 auto;">
		<?php if ($mensaje_error) echo "<mark>".$mensaje_error."</mark>"; ?>

		<h3 style="text-align: center;">ejercicio5 <br> Introduce 2 números y selecciona la operación a realizar</h3>

		<form action="" method="GET">
		<div>
				<label for="numero1">numero1: </label>
				<input type="number" name="numero1" placeholder="Ej. 1" id="numero1">
			</div>
			<div>
				<label for="numero2">numero2: </label>
				<input type="number" name="numero2" placeholder="Ej. 2" id="numero2">
			</div>
			<br>
			<div>
				<div>Selecciona una operación:</div>
				<input type="radio" name="operacion" value="sumar" id="sumar">
				<label for="sumar">sumar</label>
				<input type="radio" name="operacion" value="restar" id="restar">
				<label for="restar">restar</label>
				<input type="radio" name="operacion" value="multiplicar" id="multiplicar">
				<label for="multiplicar">multiplicar</label>
				<input type="radio" name="operacion" value="dividir" id="dividir">
				<label for="dividir">dividir</label>
			</div>
			<br>
			<input type="submit" name="submit" value="operar">
		</form>

		<?php if (isset($_GET["submit"]) && !$mensaje_error): ?>
			<h4>Has introducido los valores numero1=<?= $numero1 ?> y numero2=<?= $numero2 ?></h4>
			<h4>Has seleccionado la operación <u><?= $operacion; ?></u> y el resultado es <u><?= $resultado; ?></u></h4>
		<?php endif; ?>
	</div>
</body>
</html>