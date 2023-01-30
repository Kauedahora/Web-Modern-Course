// Função construtora
function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep;
}

const endereco1 = new Endereco("Carmen Miranda", "Esteio", "93270-670");
const endereco2 = new Endereco("Agostinho Camilo De Borba", "Esteio", "93923-299"); 

const saoIguais = (endereco1, endereco2) => {
    // comparar se as propriedades são iguais.
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep; 
}

console.log(saoIguais(endereco1, endereco2));

const temEnderecoMemoriaIguais = (endereco1, endereco2) => {
    // comparar se a referência do objeto aponta para o mesmo local na memória.
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));    