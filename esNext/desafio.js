const fs = require('fs');
const path = require('path');

const lerArquivo = caminho => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))
    .then(linhas => linhas.split("/n"))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)