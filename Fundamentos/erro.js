/* function tratarErroELancar(erro){                    //trata o erro recebido por parâmetro e lança pro usuario
    //throw new Error("Erro de digitação");
    //throw 10;                                         //Posso lançar simplesmente um numero.
    //throw true;                                       //Posso lançar um boolean.
    //throw "Mensagem";                                 //Posso lançar uma string.
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}                                          

function imprimirNomeGritado(obj) {
    try {                                               //Tente
        console.log(obj.name.toUpperCase() + "!!!");    //Colocar todo objeto name passado por parâmetros em MAIÚSCULO.
    } catch (e) {                                       //Se houve algum erro no try, cai aqui dentro para tratamento do erro.
        tratarErroELancar(e);                           //Passei o erro por parâmetro para a function tratarErroELancar.
    } finally{                                          //Sempre será executado, mesmo que o try dê certou ou mesmo que caia no catch/throw.
        console.log("final");                           //Mostra a mensagem final.
    }
}

const obj = { name: "Kauê" };                           //Criei constante obj, com o nome em português.
imprimirNomeGritado(obj);                               //Imprime o resultado da function com meu parâmetro passado em maiusculo na tela.
*/

console.log("--------------------------------------------------------------------");

function resolveErro(error) {
    throw new error = "Erro de digitação.";
}

function imprimirNomeMaiusculo(objeto) {
 try {
    console.log(objeto.name.toUpperCase());
 } catch (e) {
    console.error(`Ocorreu um erro no código! E o erro é: \n\n${erro}`);
    resolveErro(e);
 } finally{
    console.info("Sempre mostrará esse valor");
 }
}

const objeto = {nome: "Kauê"};
console.log(imprimirNomeMaiusculo(objeto));