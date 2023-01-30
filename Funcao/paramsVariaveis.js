function soma() {
    let soma = 0;
        for(let i in arguments){        // Vou pegar o índice de cada elemento do array(que é o arguments).
            soma += arguments[i];
        }
            return soma;
}

// Interessante!
console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

// Não interessante!
console.log(soma(1.1, 2.2, "Teste"));
console.log(soma("A","B", "C"));       // Ocorre a concatenação de strings com o 0 de soma.