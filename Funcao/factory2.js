function criarProduto(nomeProduto, precoProduto){
    return{
        nomeProduto, 
        precoProduto,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.49));
console.log(criarProduto("iPad", 1199.49));
console.log(criarProduto("Limão", 5));