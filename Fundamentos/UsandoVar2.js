var numero = 1;  //variaveis com o mesmo nome, sobreescreve o valor 
{
    var numero = 2;
    console.log("dentro =", numero);
}

console.log("fora =", numero);

function numero() {
    var valor = 3;
    console.log(valor);
}

