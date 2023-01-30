let valores = [8, 1, 7, 4, 2, 9];

/*for(let pos = 0; pos < valores.length; pos++){                      
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
*/

console.log("-----------------");

for(let pos in valores){               //Maneira simplificada  
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

let pos = valores.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`);       


