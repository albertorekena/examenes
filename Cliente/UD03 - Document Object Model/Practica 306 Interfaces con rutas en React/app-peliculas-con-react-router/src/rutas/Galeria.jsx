import "./Galeria.css";

const Galeria = ({peliculas}) => {
	return (
		<>
			<h1 className="main__title">Éstos Son las Pósters de las Películas</h1>

			<div className="galeria">
				{
					peliculas.length > 0
					?	(
						<>
							<div className="botones-filtrado">
								<button type="button" className="boton-filtrado boton-filtrado--verde">título</button>
								<button type="button" className="boton-filtrado boton-filtrado--purpura">intérprete</button>
								<button type="button" className="boton-filtrado boton-filtrado--azul">director</button>
							</div>

							<ul className="galeria__lista">
								{
									peliculas.map(pelicula => (
										<li className="galeria__li" key={pelicula.id}>
											<img src={pelicula.cartelera} alt={`Póster de la película ${pelicula.nombre}`} className="galeria__img" />
										</li>
									))
								}
							</ul>
						</>
						)
					: <p>No se han encontrado cartelas para mostrar.</p>
				}
			</div>
		</>
	);
};

export default Galeria;