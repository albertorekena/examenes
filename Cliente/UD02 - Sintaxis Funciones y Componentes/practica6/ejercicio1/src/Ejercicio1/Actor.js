const Actor = ({nombre, foto, children}) => {
	return (
		<div className="actor">
			<p className="foto-actor">{foto}</p>
			<div>
				<p>{nombre}</p>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Actor;