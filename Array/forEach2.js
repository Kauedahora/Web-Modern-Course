Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// laço for, percorre o array aprovados e quando executa o primeiro elemento(nome), 
// chama a função passando o (nome) e o indice do array aprovados.
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
   // console.log(array); somente se o array for passado como 3 parâmetro na function e você quiser mostrá-lo.
});