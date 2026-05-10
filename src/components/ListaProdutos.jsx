import CardProduto from "./CardProduto";

function ListaProdutos() {
  const produtos = [
    {
      nome: "Fone de Ouvido",
      imagem: "/img/fone.jpg",
      preco: "R$ 89,90",
    },
    {
      nome: "Mochila Escolar",
      imagem: "/img/mochila.jpg",
      preco: "R$ 129,90",
    },
    {
      nome: "Tênis Casual",
      imagem: "/img/tenis.jpg",
      preco: "R$ 199,90",
    },
    {
      nome: "Relógio Digital",
      imagem: "/img/relogio.jpg",
      preco: "R$ 79,90",
    },
    {
      nome: "Camiseta Básica",
      imagem: "/img/camiseta.jpg",
      preco: "R$ 49,90",
    },
    {
      nome: "Garrafa Térmica",
      imagem: "/img/garrafa.jpg",
      preco: "R$ 59,90",
    },
  ];

  return (
    <section id="produtos" className="produtos">
      <h2>Nossos Produtos</h2>

      <div className="lista-produtos">
        {produtos.map(function (produto, index) {
          return (
            <CardProduto
              key={index}
              nome={produto.nome}
              imagem={produto.imagem}
              preco={produto.preco}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ListaProdutos;