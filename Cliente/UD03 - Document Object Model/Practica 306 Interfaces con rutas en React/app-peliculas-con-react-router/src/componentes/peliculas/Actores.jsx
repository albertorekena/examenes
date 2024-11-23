import {generarUuidAleatorio} from "../../bibliotecas/funciones";

import Actor from "./Actor";
import "./Actores.css"

const Actores = ({actores}) => {
	return (
		<>
			{
				actores.length > 0
					? <ul className="actores">
							{actores.map(actor => <Actor actor={actor} key={generarUuidAleatorio()} />)}
						</ul>
					: <p>No hay datos sobre los actores de esta película :&lpar;</p>
			}
		</>
	);
};

export default Actores;