// Importando as exportações de módulos. Armazenando em constantes e requirindo os arquivos (modulos).
const moduloA = require("./moduloA.js")
const moduloB = require("./moduloB.js")

// Mostrando as importações, como elas funcionam quando importadas de outros modulos para este!
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

// Aqui o modulo B.
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);