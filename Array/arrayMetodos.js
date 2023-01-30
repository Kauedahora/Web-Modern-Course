const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop();   // Massa quebrou o carro e saiu da lista de pilotos (Remove o último elemento do array)

console.log(pilotos);

pilotos.push("Verstappen"); // Add novo elemento na última posição do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton");  // Add no primeiro elemento do array
console.log(pilotos); 

// splice pode adicionar e remover elementos em um array
// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa");    // Antes do indice 2 (Raikkonen), não removo ninguém, mas adiciono dois elementos
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Massa quebrou dnv :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // slice retorna um novo array a partir do indice 2.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // retorna um novo array do indice 1 até o indice 3. O 4 indice não entra.
console.log(algunsPilotos2);