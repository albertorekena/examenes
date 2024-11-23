// Se carga la función generarUuidAleatorio para generar el key único en cada uno de los componentes <Interprete />
import {generarUuidAleatorio} from "../bibliotecas/funciones";

import Interprete from "./Interprete";
import "./Interpretes.css"

const Interpretes = ({actores}) => {
	return (
		<>
			{
				actores.length > 0
					? <ul className="interpretes">
							{actores.map(actor => <Interprete actor={actor} key={generarUuidAleatorio()} />)}
						</ul>
					: <p>No hay datos sobre los actores de esta película :&lpar;</p>
			}
		</>
	);
};

export default Interpretes;