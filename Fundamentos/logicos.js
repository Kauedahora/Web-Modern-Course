function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;     //se trabalho1 for diferente de trabalho2.
    const manterSaudavel = !comprarSorvete;         //manter saudável é a negação de comprar sorvete. (Operador unário).
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
    
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); bitwise xor, trabalha bit a bit.
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));