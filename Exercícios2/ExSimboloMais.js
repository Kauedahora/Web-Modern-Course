const simboloMais = quantidade => {
   let resultado = "";

    for (let i = 0; i < quantidade; i++) {
        resultado += "+"
    }
        return resultado
}

// Outra maneira
/*function simboloMais(quantidade) {
return Array(quantidade).fill('+').join('')
} */

console.log(simboloMais(2));
console.log(simboloMais(4));