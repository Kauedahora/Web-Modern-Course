//Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a+b);
}

imprimirSoma(2,3);
imprimirSoma(2); //passando apenas um parametro gera um Not a number.
imprimirSoma(2, 10, 4, 5, 6, 7, 8); //passa por parametro os dois primeiros e o restante é ignorado.
imprimirSoma(); //passando um parametro vazio ele gera Not a number.

//Funcao com retorno

function soma(a, b = 1) { //valor b é padrão 1 quando não for chamado na chamada desta função.
    return a+b;
}

console.log(soma(2,3)); //irá somar os valores por parametro 2 + 3 = 5.
console.log(soma(2)); //irá somar o valor passado por parametro 2 com o 1 definido como padrão na função, gerando 2+1=3.
console.log(soma()); //sem passar nada por parametro, irá gerar Not a number.