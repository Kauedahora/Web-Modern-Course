function parimp(n) {                            //Verifica se o valor é impar ou par. Recebe o numero por parâmetro.
    if (n % 2 == 0) {
        return "O número é par!"
    } else {
        return "O número é ímpar!"
    }
}

console.log(parimp(11));                        //Passo entre parâmetro o valor 11 para a função parimp.

console.log("----------");

function soma(n1, n2) {                         //Posso definir n1 com o valor zero. n1 = 0. Neste exemplo, caso eu passe apenas um parâmetro, não retornará NaN.
    return n1 + n2;
}

console.log(soma(2, 5));
console.log(soma(2));                           //Se eu passar apenas um parâmetro. 2 + undefined é == NaN.

console.log("-----------");

function fatorial(n) {                          //5! 5 x 4 x 3 x 2 x 1
    let fat = 1;                                
    for(let c = n; c > 1; c--){                 //Inicia em 5 e decrementa 1 até chegar em 1. 
    fat *= c;                                   //Meu fat, recebe o fatorial 1 * o contador c.
    }
    return fat;                                 //Retorna o valor de fat.
}

console.log(fatorial(5));
console.log("--------------------");

/*
5! == 5 x 4 x 3 x 2 x 1
5! == 5 x 4!
    então,
n! == n x (n - 1)
1! == 1 o fatorial de 1, matematicamente é 1

*/

//Recursividade! Função recursiva é uma função que é definida em termos de si mesma.

function fatorial2(n) {                         
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial2(n - 1);
    }
}                                                     

console.log(fatorial2(5));