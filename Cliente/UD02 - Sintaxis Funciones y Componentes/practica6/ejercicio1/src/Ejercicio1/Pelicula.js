import Titulo from "./Titulo";
import Cartela from "./Cartela";
import Resumen from "./Resumen";
import Elenco from "./Elenco";

// Desestructuramos el objeto props para utilizar las variables que se corresponden con los atributos directamente
const Pelicula = ({titulo, direccion, children, cartela, elenco}) => {
	return (
		<>
			<Titulo titulo={titulo} direccion={direccion}/>
			<div className="cartela-y-resumen">
				<Cartela cartela={cartela}/>
				<Resumen>{children}</Resumen>
			</div>
			<Elenco elenco={elenco}/>
		</>
	);
};

export default Pelicula;