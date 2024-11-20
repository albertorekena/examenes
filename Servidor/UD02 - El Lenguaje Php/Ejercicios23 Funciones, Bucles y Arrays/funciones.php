<?php

// Ejercicio 1
function Dolar2euros($cantidadATransformar, $factorDeTransformacion = 0.92) {
  return $cantidadATransformar * $factorDeTransformacion;
}

function euros2Dolar($cantidadATransformar, $factorDeTransformacion = 1.08) {
  return $cantidadATransformar * $factorDeTransformacion;
}


// Ejercicio 2
$array_prueba = [0, 1, 2, 3];

function sumarItemsArray(&$array_argumento, $multiplicador = 1) {
  $suma = 0;

  for ($i = 0; $i < count($array_argumento); $i++) {
    $array_argumento[$i] *= $multiplicador;
    $suma += $array_argumento[$i];
  }

  return $suma;
}


// Ejercicio 3
$cadena1 = "perro";
$cadena2 = "gato";
$cadena3 = "pájaro";

function combinador_cadenas($separador = " ", ...$cadenas) {
  return implode($separador, $cadenas);
}


// Ejercicio 4
$array_numeros_caso1 = [0, 1, 2, 3, 4, 5, 6];
$array_numeros_caso2 = [0, 1, 2, 3, 4, 5, 6];
$arraysolopares = [];
$arraytodos = [];

function filtrador_pares(&$array_arg, $devolver_todo = false) {
  $temporal_array = [];

  if (!$devolver_todo) {
    for ($i = 0; $i < count($array_arg); $i++) { 
      if ($array_arg[$i] % 2 == 0) $temporal_array[] = $array_arg[$i] * 2;
    }
  } else {
    for ($i=0; $i < count($array_arg); $i++) { 
      $temporal_array[] = $array_arg[$i] % 2 == 0 ? $array_arg[$i] * 2 : $array_arg[$i];
    }
  }

  $array_arg = $temporal_array;

  return $array_arg;
}