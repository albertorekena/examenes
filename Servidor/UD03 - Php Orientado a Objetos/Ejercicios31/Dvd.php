<?php
require_once "Soporte.php";

class Dvd extends Soporte {
  public function __construct(
    public string $titulo,
    protected int $numero,
    private float $precio,
    public string $idiomas,
    private string $formatPantalla
  ) {
    parent::__construct($titulo, $numero, $precio);
  }

  public function muestraResumen() {
    parent::muestraResumen();
    echo "<br>";
    echo "Por ser Dvd: [idiomas:[".$this->idiomas."]".", formatPantalla:(".$this->formatPantalla.")"."]";
  }
}