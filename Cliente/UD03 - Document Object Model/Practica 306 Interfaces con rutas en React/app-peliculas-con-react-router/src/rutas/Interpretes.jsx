import Interprete from "./Interprete";
import "./Interpretes.css";
import {generarUuidAleatorio} from "../bibliotecas/funciones";

const Interpretes = ({peliculas}) => {
	// Se utiliza flatMap para tener un array plano, y no un array con arrays anidados.
	const actores = peliculas.flatMap(pelicula => pelicula.actores);
	// Con la variable de tipo Set eliminamos todos los duplicados.
	// Posteriormente, volvemos a castear la variable de tipo Set en un array plano
	const actoresSinDuplicados = [...new Set(actores)];
	
	return (
		<>
			<h1 className="main__title">Éstos Son Todos los Intérpretes</h1>
		
			{
				actores.length > 0
					? <ul className="interpretes">
							{actoresSinDuplicados.map(actor => <Interprete actor={actor} key={generarUuidAleatorio()} />)}
						</ul>
					: <p>No hay datos sobre los actores de esta película :&lpar;</p>
			}
		</>
	);
};

export default Interpretes;