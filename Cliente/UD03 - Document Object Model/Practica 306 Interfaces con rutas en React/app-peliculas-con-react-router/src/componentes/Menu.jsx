// NavLink es igual que Link con la diferencia de que añade la clase de css active, cuando el valor del atributo to coincide
// con su parte correspondiente de la url. De esto se hace uso en Menu.css
import {NavLink} from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<nav className="menu">
			<ul className="menu__ul">
				<li className="menu__li"><NavLink to="/" className="menu__enlace">Inicio</NavLink></li>
				<li className="menu__li"><NavLink to="/peliculas" className="menu__enlace">Películas</NavLink></li>
				<li className="menu__li"><NavLink to="/interpretes" className="menu__enlace">Intérpretes</NavLink></li>
				<li className="menu__li"><NavLink to="/galeria" className="menu__enlace">Galería</NavLink></li>
				<li className="menu__li"><NavLink to="/acerca-de" className="menu__enlace">Acerca de</NavLink></li>
			</ul>
		</nav>
	);
};

export default Menu;