const gerarNumerosEntre = (min, max, tempo) => {
    if (min > max) {
     [max, min] = [min, max]    // Inverto o valor das variaveis
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        }, tempo);
    })
}

// Quando todas as promises estiverem cumpridas, chama o then. (Em paralelo, juntas!)
const gerarVariosNumeros = num => { return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
])
}

gerarVariosNumeros()
    .then(console.log)