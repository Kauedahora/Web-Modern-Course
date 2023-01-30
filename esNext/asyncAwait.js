// Com promise
const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ""
    
            res.on("data", dados => {
                resultado += dados
            })
    
            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado))  // Qnd dados chegarem, não será tudo de uma vez. Irá compondo até que o resultado fique completo. 
                } catch(e) {                        //Então chamo o resolve com o objeto convertido a partir de JSON.parse, se der algum problema eu chamo catch
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplicar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma("A");
    const turmaB = await getTurma("B");
    const turmaC = await getTurma("C");
    return [].concat(turmaA, turmaB, turmaC);
}   // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))