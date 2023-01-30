// Usando array de objetos
let faixaDePreco = [
    {tooltip : "Até R$ 1600,00", minimo : 0, maximo : 1600},
    {tooltip : "de R$ 1600,00 a R$ 1800,00", minimo : 1600, maximo : 1800},
    {tooltip : "de R$ 1800,00 a R$ 2000,00", minimo : 1800, maximo : 2000},
]

// Usando Factory Function
function criaFaixaDePreco(tooltip, minimo, maximo)  {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixaDePreco2 = [
    criaFaixaDePreco("Até R$ 50", 50, 100),
    criaFaixaDePreco("Até R$ 100", 100, 150),
    criaFaixaDePreco("Até R$ 200", 150, 200)
]
console.log(faixaDePreco);
console.log(faixaDePreco2);

// Constructor Function

function FaixaDePreco3(tooltip, minimo, maximo) {
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let preco =[ 
    new FaixaDePreco3("Até R$ 500", 500, 1000),
    new FaixaDePreco3("Até R$ 1500", 1000, 1500),
    new FaixaDePreco3("Até R$ 2000", 1500, 2000)];
console.log(preco);