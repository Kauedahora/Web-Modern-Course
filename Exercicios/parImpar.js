// Recebe um número por parâmetro e verifica se é par/ímpar.

parImpar = (numero) => {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par!`);
    } else{
        console.log(`O número ${numero} é impar!`);
    }
}

parImpar(5);
parImpar(4);
parImpar(23432);
parImpar(0);

console.log("--------");
 
// Recebe uma quantidade de números por parâmetro para avaliar, e a função exibe se cada valor é par/ímpar. 

function exibirTipo(limite) {
    for(let i = 0; i <= limite; i++){
        if( i % 2 === 0){
            console.log(i,"PAR");
        } else{
        console.log(i,"IMPAR");
        }
    }
}
exibirTipo(5);