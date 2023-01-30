const nums = [1,2,3,4,5];

// map() cria um array novo com o mesmo número de posições mapeando cada valor deste array.
//for com propósito
// neste caso, o array nums possui 5 elementos e eu quero que sejam mapeados e gerem um array novo
// onde cada elemento (no array novo), seja o dobro
let resultado = nums.map(function (e) {
    return e * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);