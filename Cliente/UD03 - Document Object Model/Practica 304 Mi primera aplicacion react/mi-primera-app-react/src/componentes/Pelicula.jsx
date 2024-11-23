import Interpretes from "./Interpretes";
import "./Pelicula.css";

const Pelicula = ({nombre, cartelera, actores, children}) => {
	return (
		<div className="pelicula">
			<h2 className="pelicula__titulo">{nombre}</h2>

			<div className="pelicula__cartel-y-resumen">
				<img src={cartelera} alt={`póster de la película ${nombre}`} className="pelicula__poster" />
				<p>{children}</p>
			</div>

			<Interpretes actores={actores} />
		</div>
	);
};

export default Pelicula;