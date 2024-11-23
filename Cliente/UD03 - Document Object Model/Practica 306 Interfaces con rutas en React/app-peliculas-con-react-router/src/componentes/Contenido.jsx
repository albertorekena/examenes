import {Routes, Route} from "react-router-dom";
import Inicio from "../rutas/Inicio";
import Peliculas from "../rutas/Peliculas";
import Pelicula from "../rutas/Pelicula";
import Interpretes from "../rutas/Interpretes";
import Galeria from "../rutas/Galeria";
import AcercaDe from "../rutas/AcercaDe";
import Error from "../rutas/Error";
import "./Contenido.css";

const Contenido = ({peliculas}) => {
	return (
		<main className="main">
			<Routes>
				<Route index element={<Inicio />} />
				<Route path="peliculas">
					{/* Con el atributo index se define la "url raíz" /películas */}
					<Route index element={<Peliculas peliculas={peliculas} />} />
					{/* Con el atributo path=":id" se controla el parámetro que puede acompañar a /peliculas. */}
					{/* :id hará referencia al id de la película */}
					<Route path=":id" element={<Pelicula peliculas={peliculas} />} />
				</Route>
				<Route path="interpretes" element={<Interpretes peliculas={peliculas} />} />
				<Route path="galeria" element={<Galeria peliculas={peliculas} />} />
				<Route path="acerca-de" element={<AcercaDe />} />
				{/* Con el atributo path=":*" controlaremos todas las url's no definidas, que renderizarán el componente error. */}
				<Route path="*" element={<Error />} />
			</Routes>
		</main>
	);
};

export default Contenido;