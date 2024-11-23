const Cartela = ({cartela}) => {
	return (
		<p className="cartela">
			<img src={cartela} alt="" />
			<a href={cartela} className="cartela-enlace">Cartela</a>
		</p>
	);
};

export default Cartela;