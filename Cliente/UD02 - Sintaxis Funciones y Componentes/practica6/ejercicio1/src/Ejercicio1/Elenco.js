import Actor from "./Actor";

const Elenco = ({elenco}) => {
	return (
		<div className="elenco">
			{
				// Elenco es un array de 2 items, los cuales mapearemos con el componente Actor
				elenco.map(elnc => (
					<Actor nombre={elnc.nombre} foto={elnc.foto}>
						{elnc.biografia}
					</Actor>
				))
			}
		</div>
	);
};

export default Elenco;