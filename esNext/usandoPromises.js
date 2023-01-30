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
// Uma chamada sequencial, 1 depois 2, depois 3.
// let nomes = [];
// getTurma("A").then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma("B").then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma("C").then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes);
//         })
//     })
// })

// Paralelo, espera a resolução de todas as promises pra então iniciar o passo a passo.
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // Tratar qualquer eventual problema de uma promise.

    // Pegando uma turma que não existe para ver cair no catch
    // getTurma("D").catch(e => console.log(e.message))