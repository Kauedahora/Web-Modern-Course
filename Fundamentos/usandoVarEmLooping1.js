for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log(`O valor de i é ${i}`);

console.log("-------------------");

/*
for (let b = 0; b < 10; b++){       //por let ser uma variavel com escopo de bloco, se eu tentar ver o valor de b fora do bloco, não irá conter nada!
    console.log(b);
}

console.log(`O valor de b é ${b}`); //b é undefined pois let foi definida dentro do for
*/

console.log("______________________");

const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i);
    })
}

funcs[2](); //por var não possuir escopo de função, irá me retornar o último valor de i
funcs[8](); //por var não possuir escopo de função, irá me retornar o último valor de i

console.log("--------------------------");

const teste = [];

for (let i = 0; i < 10; i++){
    teste.push(function () {
        console.log(i);
    })
}

teste[2](); 
teste[0]();
teste[6]();
teste[8]();

console.log(teste.length);