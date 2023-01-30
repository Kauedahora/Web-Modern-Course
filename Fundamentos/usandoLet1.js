let numero = 1; //Variaveis let tem escopo global, escopo por funcao e escopo por blocos
                //Variaveis var tem escopo global e por funcao
{
    let numero = 2;  //variaveis let dentro de escopo por blocos e de forma global, não irá sobreescrever o valor como variaveis var.
    console.log("dentro =", numero);
}
console.log("fora =", numero);