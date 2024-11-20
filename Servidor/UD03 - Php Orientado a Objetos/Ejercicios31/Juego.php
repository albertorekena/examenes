<?php
require_once "Soporte.php";

class Juego extends Soporte {
  public function __construct(
    public string $titulo,
    protected int $numero,
    private float $precio,
    public string $consola,
    private int $minNumJugadores,
    private int $maxNumJugadores
  ) {
    parent::__construct($titulo, $numero, $precio);
  }

  public function numeroJugadoesPosibles() {
    $textoARetornar = "";

    if ($minNumJugadores == 1 && $maxNumJugadores == 1) {
      $textoARetornar += "Para un jugador";
    } else if ($minNumJugadores == $maxNumJugadores) {
      $textoARetornar += "Para $minNumJugadores jugadores";
    } else {
      $textoARetornar += "De $minNumJugadores a $maxNumJugadores jugadores";
    }
    

    echo $textoARetornar;
  }

  public function muestraResumen() {
    parent::muestraResumen();
    echo "<br>";
    echo "Por ser Juego: [consola:".$this->consola.", minNumJugadores:".$this->minNumJugadores.", maxNumJugadores:".$this->maxNumJugadores."]";
  }
}