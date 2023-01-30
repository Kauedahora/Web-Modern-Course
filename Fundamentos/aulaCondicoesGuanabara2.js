let idade = 22;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
    console.log("Não vota");
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional");
} else {
    console.log("Voto obrigatório");
}   

console.log("--------------------");

let agora = new Date();
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora <= 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
} 

console.log("--------------------");

let agora2 = new Date();
let diaSemana = agora2.getDay();

console.log(diaSemana);

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;

    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    case 4:
        console.log("Quinta-feira");
        break;
    
    case 5: 
        console.log("Sexta-feira");
        break;

    case 6:
        console.log("Sábado");
        break;
    
    default:
        console.log("[ERRO] Dia inválido!");
}