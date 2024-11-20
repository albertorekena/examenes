<?php
include_once "Soporte.php";

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

  public function muestraJugadoresPosibles() {
    $textoARetornar = "";

    if ($this->minNumJugadores == 1 && $this->maxNumJugadores == 1) {
      $textoARetornar += "Para un jugador.<br>";
    } else if ($this->minNumJugadores == $this->maxNumJugadores && $this->minNumJugadores != 1) {
      $textoARetornar += "Para $this->minNumJugadores jugadores.<br>";
    } else {
      $textoARetornar += "De $this->minNumJugadores a $this->maxNumJugadores jugadores.<br>";
    }
    

    echo $textoARetornar;
  }

  public function muestraResumen() {
    parent::muestraResumen();
    echo "Por ser Juego: [consola:".$this->consola.", minNumJugadores:".$this->minNumJugadores.", maxNumJugadores:".$this->maxNumJugadores."]<br>";
  }
}