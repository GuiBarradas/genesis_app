const dados = [
    {codigo: 1, nome: "Banana", quantidade: 1000},
    {codigo: 2, nome: "Morango", quantidade: 300},
    {codigo: 3, nome: "Laranja", quantidade: 800},
 ]

export const getProdutos = () => dados;

export const addProduto = (produto) => dados.push(produto);
