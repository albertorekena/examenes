<?php
require_once "Resumible.php";

abstract class Soporte implements Resumible {
  private static $IVA = 0.21;

  public function __construct(
    public string $titulo,
    protected int $numero,
    private float $precio
  ) {}

  public function getPrecio() {
    return $this->precio;
  }

  public function getPrecioConIva() {
    return ($this->precio) * (1 + self::$IVA);
  }

  public function getNumero() {
    return $this->numero;
  }

  public function muestraResumen() {
    echo "Soporte: [titulo:".$this->titulo.", numero:".$this->numero.", precio:".$this->precio.", precioConIva:".$this->getPrecioConIva()."]<br>";
  }
}