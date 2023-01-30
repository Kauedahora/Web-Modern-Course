const calcularMedia = numeros => {
    const quantidadeDeNumeros = numeros.length;
    let somaTotal = numeros.reduce((num1, num2) => num1 + num2);

    return somaTotal / quantidadeDeNumeros;
}

console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornará 3