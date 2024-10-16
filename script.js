// Crie uma lista de pedidos utilizando um array de objetos. Cada pedido deve ter as seguintes propriedades:

// id: número único do pedido.
// cliente: nome do cliente.
// itens: array de objetos, onde cada item tem nome e preco.
// preparado: valor booleano (inicialmente false), indicando se o pedido foi preparado ou não.
// entregue: valor booleano (inicialmente false), indicando se o pedido foi entregue ou não.
// Função para adicionar um novo pedido. A função deve receber o nome do cliente e uma lista de itens (com nome e preço), criar um novo pedido e adicioná-lo ao array de pedidos.

const pedidos = [
  {
    id: 1,
    nome:' ',
    clientes: '',
    Entregue: true
  },
];

function addpedido(cliente,nomes,preco){
const novopedido=
        {
                id:pedidos.length+1,
                cliente:cliente,
                itens:nomes, preco

        }

pedidos.push(novopedido)
}
addpedido('Jean','Blusa',33)
console.log(pedidos)