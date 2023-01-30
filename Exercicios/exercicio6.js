const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao);
}

const jurosComposto = (capitalInicial, taxaDeJuros, tempoDeAplicacao) =>{
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao;
}

console.log("Juros simples: R$ " + jurosSimples(100, 10 / 100, 2).toFixed(2));
console.log("Juros composto: R$ " + jurosComposto(100, 10 / 100, 2).toFixed(2));