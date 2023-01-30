const repetir = (item, quantidade) => {
    let resultado = [];

    for (let i = 0; i < quantidade; i++) {
        resultado.push(item);
    }
        return resultado
}

console.log(repetir("codigo", 2));
console.log(repetir(7, 3));