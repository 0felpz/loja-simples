function CardProduto(props) {
  return (
    <div className="card-produto">
      <img src={props.imagem} alt={props.nome} />
      <h3>{props.nome}</h3>
      <p className="preco">{props.preco}</p>
      <button>Comprar</button>
    </div>
  );
}

export default CardProduto;