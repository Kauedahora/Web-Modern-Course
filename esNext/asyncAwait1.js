const esperarPor = (tempo = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>  resolve(), tempo);
    })
}

// esperarPor(2000)
//     .then(() => console.log("Executando promise 1 ..."))
//     .then(esperarPor)
//     .then(() => console.log("Executando promise 2 ..."))
//     .then(esperarPor)
//     .then(() => console.log("Executando promise 3 ..."))
const retornarValor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(10) 
        }, 5000);
    })
}

async function retornarValorRapido()  {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido();

    await esperarPor(1500);
    console.log(`Async/await ${valor} ...`);

    await esperarPor(1500);
    console.log(`Async/await ${valor + 1} ...`);

    await esperarPor(1500);
    console.log(`Async/await ${valor + 2} ...`);

    return valor + 3;
}

 async function executarDeVerdade() {
   const resposta = await executar()
    console.log(resposta)
}

executarDeVerdade()