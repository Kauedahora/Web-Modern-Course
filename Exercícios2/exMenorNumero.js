// Criar uma função que receba um array de números e retorne o menor número desse array.

const menorNumero = numeros => {
    let menor = numeros[0];

    for (let i in numeros) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
        return menor
}

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15
console.log(menorNumero([0, 5, 2, -1]))   // retornará -1