import {useRef} from "react";

import Interpretes from "./Interpretes";
import "./Pelicula.css";

const Pelicula = ({nombre, cartelera, recaudacion, actores, children}) => {
	// Se crean los objetos que apuntarán a los elementos del Dom virtual
	const refTaquilla = useRef(null);
	const refActores = useRef(null);

	// Para manipular el elemento del Dom, se accede a él a través del atributo current
	const handleElenco = () => refActores.current.classList.toggle("interpretes--mostrar");

	const handleTaquilla = () => refTaquilla.current.classList.toggle("div-taquilla--mostrar");

	return (
		<div className="pelicula">
			<h2 className="pelicula__titulo">{nombre}</h2>

			<div className="pelicula__cartel-y-resumen">
				<img src={cartelera} alt={`póster de la película ${nombre}`} className="pelicula__poster" />
				<p>{children}</p>
			</div>

			<div className="botones-elenco-y-taquilla-y-div-taquilla">
				<button type="button" onClick={() => handleElenco()} className="boton boton--elenco">Elenco</button>
				<button type="button" onClick={() => handleTaquilla()} className="boton boton--taquilla">Taquilla</button>
				{/* Con el atributo ref se vincula el elemento del Dom virtual con el objeto que se utilizará para manipularlo */}
				<div ref={refTaquilla} className="div-taquilla">{recaudacion}</div>
			</div>

			{/* Utilizando props se pasa el objeto creado con useRef al componente Interpretes. Y, allí se vinculará con el elemento */}
			<Interpretes refActores={refActores} actores={actores} />
		</div>
	);
};

export default Pelicula;