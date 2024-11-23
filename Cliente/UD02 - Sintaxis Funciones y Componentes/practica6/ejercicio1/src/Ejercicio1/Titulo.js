const Titulo = ({titulo, direccion}) => {
	return (
		<div className="titulo">
			<h1>{titulo}</h1>
			<p>{direccion}</p>
		</div>
	);
};

export default Titulo;