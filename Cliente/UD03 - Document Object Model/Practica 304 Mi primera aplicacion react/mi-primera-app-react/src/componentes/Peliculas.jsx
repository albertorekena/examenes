import Pelicula from "./Pelicula";
import "./Peliculas.css";

const Peliculas = ({peliculas}) => {
	return (
		<div className="peliculas">
			{
				// Se realiza una pequeña comprobación para confirmar que sí hay datos de películas
				peliculas.length > 0
				?	peliculas.map(pelicula => (
						<Pelicula
							nombre={pelicula.nombre}
							cartelera={pelicula.cartelera}
							actores={pelicula.actores}
							key={pelicula.id}
						>
							{pelicula.resumen}
						</Pelicula>
					))
				: "No se han encontrado películas."
			}
		</div>
	);
};

export default Peliculas;