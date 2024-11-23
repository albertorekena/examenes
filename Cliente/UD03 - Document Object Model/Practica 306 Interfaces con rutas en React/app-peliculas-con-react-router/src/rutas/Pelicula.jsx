import {useParams, Navigate} from "react-router-dom";
import Actores from "../componentes/peliculas/Actores";
import "./Pelicula.css";

const Pelicula = ({peliculas}) => {
	const {id} = useParams();
	const pelicula = peliculas.find(p => p.id == id);
	let nombre;
	let cartelera;
	let resumen;
	let actores;

	if (pelicula) {
		nombre = pelicula.nombre;
		cartelera = pelicula.cartelera;
		resumen = pelicula.resumen;
		actores = pelicula.actores;
	}

	return (
		pelicula
		? (
			<>
				<div className="pelicula">
					<h2 className="pelicula__titulo">{nombre}</h2>

					<div className="pelicula__cartel-y-resumen">
						<img src={cartelera} alt={`póster de la película ${nombre}`} className="pelicula__poster" />
						<p>{resumen}</p>
					</div>

					<Actores actores={actores} />
				</div>
			</>
		)
		// Si el parámetro id no se corresponde con el de ninguna película, se renderizará el componente Error.
		// Se añade el atributo replace para que no hayan redirecciones no deseadas.
		: <Navigate to="error" replace />
	);
};

export default Pelicula;