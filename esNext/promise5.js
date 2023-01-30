const funcionarOuNao = (valor, chanceDeErro) => {
    return new Promise((resolve, reject) => {
    try { 
        con.log("temp")
        if (Math.random() < chanceDeErro) {
            reject("Ocorreu um erro!")
        } else {
            resolve(valor)
        }
    } catch(e) {
        reject(e)
    }
})
}

funcionarOuNao("Testando...", 0.5)
    .then(val => `Valor: ${val}`)
    .then(
        val => console.log(val),
        err => console.log(`Erro especifico: ${err}`)
    )
    .then(() => console.log("Quase fim!"))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log("Fim!"))