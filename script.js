// Crie uma lista de pedidos utilizando um array de objetos. Cada pedido deve ter as seguintes propriedades:

// id: número único do pedido.
// cliente: nome do cliente.
// itens: array de objetos, onde cada item tem nome e preco.
// preparado: valor booleano (inicialmente false), indicando se o pedido foi preparado ou não.
// entregue: valor booleano (inicialmente false), indicando se o pedido foi entregue ou não.
// Função para adicionar um novo pedido. A função deve receber o nome do cliente e uma lista de itens (com nome e preço), criar um novo pedido e adicioná-lo ao array de pedidos.

// Função para calcular o valor total do pedido. Dada a lista de itens, a função deve somar os preços dos itens para calcular o valor total do pedido.

const pedidos = [
  {
    id: 0,
    clientes: "",
    itens: [
      { nome: "Hambúrguer", preco: 15 },
      { nome: "Refrigerante", preco: 59 },
    ],
    preparado: false,
    entregue: true,
  },
];

function addpedido(cliente, itens) {
  const novopedido = {
    id: pedidos.length,
    cliente: cliente,
    itens: itens,
    preparado: false,
    entregue: false,
  };

  pedidos.push(novopedido);
  console.log(
    `Pedido ${pedidos.length} Para o cliente ${cliente} adicionado com sucesso!`
  );

  return novopedido;
}

function soma(pedido) {
  const total = pedido.itens.reduce(
    (acumulador, item) => acumulador + item.preco,
    0
  );
  return total;
}

addpedido("Jean", [
  { nome: "Refrigerante", preco: 4.5 },
  { nome: "Batata Frita", preco: 20 },
]);
addpedido("Lucas", [
  { nome: "Hamburgue", preco: 34.88 },
  { nome: "Água", preco: 2.5 },
]);
const totalPedido = soma(pedidos[2]);
console.log(pedidos[2])
console.log(`O valor total do pedido é: R$ ${totalPedido.toFixed(2)}`);
