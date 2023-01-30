console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

// Se eu fizer 

this.a = 1; // Agora o a, será visível fora do arquivo
exports.b = 2; // Agora o b, também será visível fora do arquivo
module.exports.c = 3; //Agora oc, também exporta algo p/fora do arquivo

exports = null; // Mesmo setando para nulo, continuará apotando para o que setei acima.
console.log(module.exports);

// Não será retornado. NÂO UTILIZAR!
exports = {
    nome: "teste"
}

console.log(module.exports);

// Utilizar
module.exports = {publico: true};