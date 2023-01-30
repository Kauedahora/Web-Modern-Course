const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

//Não é uma forma interessante para arrays.

for (let i in notas) {        //Para cada um dos elementos de notas, ele me retorna o indice i.
    console.log(i, notas[i]);   //Retorna o indice, e a nota no indice indicado.
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

//Interessante para objetos

for(let atributo in pessoa){        //atributos de um objeto pessoa.
    console.log(`${atributo} = ${pessoa[atributo]}`);   //Retorna o atributo e o atributo relacionado a pessoa.
}
