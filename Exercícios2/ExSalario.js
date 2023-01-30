const calcularSalario = (qtdHorasTrabalhadasMes, salPorHora ) => { 
    const salario = salPorHora * qtdHorasTrabalhadasMes;
    return `Salario igual a R$ ${salario}`};

console.log(calcularSalario(150, 40.5));
console.log(calcularSalario(150, 17.50));