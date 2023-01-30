let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Percorrer o array através de in. NÃO É A MELHOR FORMA PARA ARRAYS!
for(let x in nums){         //indice do array(x) em nums (variavel que armazena os arrays).
    if (x == 5){            //se indice do array(x) for igual a 5.
        break;              //Assim que o if chegou igual a 5, ele interrompe o for(que é o laço mais próx. dele) e pronto.
    }         
    console.log(`${x} = ${nums[x]}`);  //Retorna o indice do array(x), e o nums no indice indicado.
}

console.log("----------------");

for(let y in nums){
    if(y == 5){
        continue;           //Interrompe quando o if chega em 5, pula o 5 e segue o laço for do 6 em diante. 
       
    } 
    console.log(`${y} = ${nums[y]}`);
}

console.log("-----------");

//Break causa desvio de fluxo pra fora do laço corrente. Não age em cima de if, SOMENTE FOR E WHILE.
//Continue interrrompe a repetição corrente e vai pra próxima repetição. só age em cima de estruturas de repetição.

//Não use!!!!!!!!!!!!!!!
externo: for(a in nums){
    for(b in nums){
        if (a == 2 && b == 3) break externo; {
            console.log(`Par = ${a}, ${b}`);
        }
    }
}

console.log("Fim!");