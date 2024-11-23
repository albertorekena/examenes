import "./Actor.css";

const Actor = ({actor}) => {
	return (
		<li className="actor">
			<img src={actor.imagen} alt="Foto del actor" className="actor__img" />

			<div className="actor__descripcion">
				<p>Nombre: {actor.nombre}</p>
				<p>Biografía: {actor.biografia}</p>
			</div>
		</li>
	);
};

export default Actor;