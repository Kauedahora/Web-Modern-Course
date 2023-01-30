const endereco = {
    rua: "Carmem Miranda",
    cidade: "Esteio",
    CEP : "93270670",
    }, exibirEndereco = (endereco) => {
        for (let chave in endereco) {
            console.log(chave,endereco[chave]);
        }
}

console.log(endereco);