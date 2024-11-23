// Se carga la función generarUuidAleatorio para generar el key único en cada uno de los componentes <Interprete />
import {generarUuidAleatorio} from "../bibliotecas/funciones";

import Interprete from "./Interprete";
import "./Interpretes.css"

const Interpretes = ({refActores, actores}) => {
	return (
		<div ref={refActores} className="interpretes">
			{
				actores.length > 0
					? <ul className="interpretes__lista">
							{actores.map(actor => <Interprete actor={actor} key={generarUuidAleatorio()} />)}
						</ul>
					: <p>No hay datos sobre los actores de esta película :&lpar;</p>
			}
		</div>
	);
};

export default Interpretes;