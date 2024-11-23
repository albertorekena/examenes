import {Link} from "react-router-dom";
import Pelicula from "./Pelicula";
import "./Peliculas.css";

const Peliculas = ({peliculas}) => {
	return (
		<>
			<h1 className="main__title">Éstas Son Todas las Películas</h1>

			<div className="peliculas">
				{
					peliculas.length > 0
					?	(
						<>
							<div className="botones-filtrado">
								<button type="button" className="boton-filtrado boton-filtrado--verde">título</button>
								<button type="button" className="boton-filtrado boton-filtrado--purpura">intérprete</button>
								<button type="button" className="boton-filtrado boton-filtrado--azul">director</button>
							</div>

							<ul className="peliculas__lista">
								{
									peliculas.map(pelicula => (
										<li className="peliculas__li" key={pelicula.id}>
											<Link to={`/peliculas/${pelicula.id}`} className="peliculas__enlace">{pelicula.nombre}</Link>
										</li>
									))
								}
							</ul>
						</>
						)
					: <p>No se han encontrado películas.</p>
				}
			</div>
		</>
	);
};

export default Peliculas;