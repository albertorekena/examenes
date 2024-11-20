<?php
class Cliente {
  private array $soportesAlquilados = [];
  private int $numSoportesAlquilados = 0;

  public function __construct(
    public string $nombre,
    private int $numero,
    private int $maxAlquilerConcurrente = 3
  ) {}

  public function getNumero() {
    return $this->numero;
  }

  public function setNumero($numero) {
    $this->numero = $numero;
  }

  public function getNumSoportesAlquilados() {
    return $this->numSoportesAlquilados;
  }

  public function muestraResumen() {
    echo "El socio {$this->numero} es {$this->nombre}.<br>";
    echo "Su número de soportes alquilados es: {$this->numSoportesAlquilados}.<br>";

    if ($this->numSoportesAlquilados > 0) {
      echo "El nombre y el orden en el que fueron alquilados es:<br>";
      for ($i = 0; $i < $this->numSoportesAlquilados; $i++) {
        echo "--> $i.-";
        echo $this->soportesAlquilados[$i]->muestraResumen();
      }
    }
  }

  public function tieneAlquilado(Soporte $s):bool {
    $isAlquilado = false;

    if ($this->numSoportesAlquilados > 0) {
      for ($i = 0; $i < count($this->soportesAlquilados) && !$isAlquilado; $i++) { 
        if ($this->soportesAlquilados[$i]->getNumero() == $s->getNumero()) {
          $isAlquilado = true;
        }
      }
    }

    return $isAlquilado;
  }

  public function alquilar(Soporte $s):bool {
    // $isAlquila es la variable que devuelve finalmente la función, y que indica si se ha realizado el alquiler o no
    $isAlquila = false;

    if (!$this->tieneAlquilado($s) && (count($this->soportesAlquilados) < $this->maxAlquilerConcurrente)) {
      array_push($this->soportesAlquilados, $s);
      $this->numSoportesAlquilados++;
      $isAlquila = true;
      echo "El soporte {$s->getNumero()} ha sido alquilado correctamente.<br>";
    } else {
      if ($this->tieneAlquilado($s) && (count($this->soportesAlquilados) >= $this->maxAlquilerConcurrente)) {
        echo "El soporte {$s->getNumero()} ya está alquilado. Y, además, tienes ya el número máximo posible de soportes alquilados, no puedes alquilar más.<br>";
      } else {
        if ($this->tieneAlquilado($s)) {
          echo "El soporte {$s->getNumero()} ya está alquilado.<br>";
        }

        if (count($this->soportesAlquilados) >= $this->maxAlquilerConcurrente) {
          echo "El cliente con el número {$this->getNumero()} tiene ya el número máximo posible de soportes alquilados ({$this->getNumSoportesAlquilados()}), no puede alquilar más.<br>";
        }
      }
    }

    return $isAlquila;
  }

  public function devolver(int $numSoporte):bool {
    // $isDevuelto es la variable que devuelve finalmente la función y que indica si se ha realizado finalmente la devolución o no
    $isDevuelto = false;

    // En primer lugar se comprueba que el cliente tenga soportes alquilados
    if (count($this->soportesAlquilados) > 0) {
      for ($i = 0;$i < count($this->soportesAlquilados) && !$isDevuelto; $i++) { 
        // En este bucle for, únicamente se realizan acciones si se encuentra al soporte a devolver
        if ($this->soportesAlquilados[$i]->getNumero() == $numSoporte) {
          array_splice($this->soportesAlquilados, $i, 1);
          $this->numSoportesAlquilados--;
          $isDevuelto = true;
          echo "El soporte {$numSoporte} ha sido devuelto correctamente.<br>";
        }
      }

      if (!$isDevuelto) {
        echo "El soporte {$numSoporte}, el cual estás intentando devolver, no lo tienes alquilado.<br>";
      }
    } else {
      echo "Este cliente no tiene soportes alquilados, no puede devolver nada.<br>";
    }

    return $isDevuelto;
  }

  public function listarAlquileres():void {
    foreach ($this->soportesAlquilados as $soporteAlquilado) {
      $soporteAlquilado->muestraResumen();
      echo "<br>";
    }
  }
}