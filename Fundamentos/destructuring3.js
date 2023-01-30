function rand([min = 0, max = 1000]) {                  //Função que retorna um valor random!!
    if ( min > max ) [min, max] = [max, min];           //Se o min for > max, cria uma variavel array com os valores invertidos. max primeiro, min depois.
    const valor = Math.random() * (max - min) + min;    //Numero random, desloca p/ver se vai dar sempre o valor min e o max  
    return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));       //Passando apenas o primeiro elemento
console.log(rand([, 10]));      //Passando apenas o segundo elemento
console.log(rand([]));          //Passando vazio, ele assume os valores definidos de min e max na function rand 0 e 1000