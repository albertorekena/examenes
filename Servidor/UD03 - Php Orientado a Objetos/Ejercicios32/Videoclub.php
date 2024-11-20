<?php
include_once "CintaVideo.php";
include_once "Dvd.php";
include_once "Juego.php";
include_once "Cliente.php";

class Videoclub {
	private array $productos = [];
	private int $numProductos = 0;
	private array $socios = [];
	private int $numSocios = 0;

	public function __construct(
		private string $nombre
	) {}

	private function incluirProducto(Soporte $soporte) {
		array_push($this->productos, $soporte);
		$this->numProductos++;
	}

	public function incluirCintaVideo(string $titulo, float $precio, int $duracion) {
		$cintaVideo = new CintaVideo($titulo, $this->numProductos, $precio, $duracion);

		$this->incluirProducto($cintaVideo);
	}

	public function incluirDvd(string $titulo, float $precio, string $idiomas, string $pantalla) {
		$dvd = new Dvd($titulo, $this->numProductos, $precio, $idiomas, $pantalla);
		
		$this->incluirProducto($dvd);
	}

	public function incluirJuego(string $titulo, float $precio, string $consola, int $minNumJugadores, int $maxNumJugadores) {
		$juego = new Juego($titulo, $this->numProductos, $precio, $consola, $minNumJugadores, $maxNumJugadores);

		$this->incluirProducto($juego);
	}

	public function incluirSocio(string $nombre, int $maxAlquileresConcurrentes = 3) {
		$socio = new Cliente($nombre, $this->numSocios, $maxAlquileresConcurrentes);

		array_push($this->socios, $socio);

		$this->numSocios++;
	}

	public function listarProductos() {
		foreach ($this->productos as $producto) {
			$producto->muestraResumen();
			echo "<br>";
		}
	}

	public function listarSocios() {
		foreach ($this->socios as $socio) {
			$socio->muestraResumen();
			echo "<br>";
		}
	}

	public function alquilarSocioProducto(int $numeroCliente, int $numeroSoporte) {
		$isSocioEncontrado = false;
		$temp_socio = null;
		$isProductoEncontrado = false;

		for ($i = 0; $i < $this->numSocios && !$isSocioEncontrado; $i++) {
			if ($this->socios[$i]->getNumero() == $numeroCliente) {
				$isSocioEncontrado = true;
				$temp_socio = $this->socios[$i];
			}
		}

		for ($i = 0; $i < $this->numProductos && $isSocioEncontrado && !$isProductoEncontrado; $i++) {
			if ($this->productos[$i]->getNumero() == $numeroSoporte) {
				$isProductoEncontrado = true;
				$temp_socio->alquilar($this->productos[$i]);
			}
		}

		if (!$isSocioEncontrado && !$isProductoEncontrado) {
			echo "Ni el cliente {$numeroCliente} ni el soporte {$numeroSoporte} existen.<br>";
		} else {
			if (!$isSocioEncontrado) {
				echo "El cliente {$numeroCliente} no existe.<br>";
			}

			if ($isSocioEncontrado && !$isProductoEncontrado) {
				echo "El soporte {$numeroSoporte} no existe.<br>";
			}
		}
	}
}