function rand({min = 0, max = 1000}) {      //Função que retorna um valor random!!
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);               //Função Math.floor(x) retorna o menor número inteiro dentre o número "x".
}

const obj = { max: 40, min: 30 };          //Passo por objeto o maximo e o minimo.
console.log(rand(obj));                    //Por parâmetro, envio a constante obj com os valores min e max.

console.log(rand({ min: 955 }));           //Passei apenas o valor de min, max ele pegará o valor padrão que a function possui.
console.log(rand({}));                     //Passei um objeto vazio, ele pega o valor min e max da function que já estão definidos.
