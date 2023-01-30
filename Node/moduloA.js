// Outras maneiras de exportar um modulo.

console.log(this); // this é um objeto vazio! Então, declarando os abaixo e exportando 
// podemos verificar que quando importarmos, todos estarão armazenados em um objeto {ola ..., bemVindo ..., ateLogo ...}
this.ola = "Fala pessoa!";
exports.bemVindo = "Bem ao node!";
module.exports.ateLogo = "Até próximo exemplo";