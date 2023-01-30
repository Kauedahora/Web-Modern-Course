// Coleção dinâmica de pares chave : valor

const produto = new Object;
produto.nome = "Cadeira";
produto["Marca do produto"] = "Generica";
produto.preco = 220;
console.log(produto);
delete produto.preco;
delete produto["Marca do produto"];
console.log(produto);

const carro = {
    modelo : "A4",
    valor : 89000,
    proprietario : {
        nome : "Raul",
        idade : 56, 
        endereco : {
            logradouro : "Rua abc",
            numero : 123
        }
    }, condutores : [
        {nome: "Junior", idade: 19},
        {nome: "Ana", idade: 42}
    ], calcularValorSeguro() {
        //..
    }
}

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["numero"] = "Av Gigante";
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco.numero;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores); //undefined