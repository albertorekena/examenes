import "./Interprete.css";

const Interprete = ({actor}) => {
	return (
		<li className="interprete">
			<img src={actor.imagen} alt="Foto del actor" className="interprete__img" />

			<div className="interprete__descripcion">
				<p>Nombre: {actor.nombre}</p>
				<p>Biografía: {actor.biografia}</p>
			</div>
		</li>
	);
};

export default Interprete;