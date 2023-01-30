const receberPrimeiroEUltimoElemento = elementos => {
    
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
    }
    

console.log(receberPrimeiroEUltimoElemento(7, 14, "Olá"));
console.log(receberPrimeiroEUltimoElemento(-100, "Aplicativo", 16));