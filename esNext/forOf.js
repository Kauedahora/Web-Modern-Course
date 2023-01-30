for (let letra of "Cod3r") {        // Percorre em cima de valor
    console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promisse"];

for (let i in assuntosEcma) {       // Percorre em cima de indice
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ["Map", { abordado: true}],
    ["Set", { abordado: true}],
    ["Promisse", { abordado: false}]
]);

for (let assunto of assuntosMap) {  // Chave e valor
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) { // Somente chave
    console.log(chave);
}

for (let valor of assuntosMap.values()) {   // Somente valor
    console.log(valor);
}

for (let [chave, valor] of assuntosMap.entries()) { // Chave e valor separados, ao invés de diretamente o array
    console.log(chave, valor);
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
    console.log(letra);
}