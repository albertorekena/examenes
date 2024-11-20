<?php
include_once "Soporte.php";

class CintaVideo extends Soporte {
  public function __construct(
    public string $titulo,
    protected int $numero,
    private float $precio,
    private int $duracion
  ) {
    parent::__construct($titulo, $numero, $precio);
  }

  public function muestraResumen() {
    parent::muestraResumen();
    echo "Por ser CintaVideo: [duracion:".$this->duracion."]<br>";
  }
}