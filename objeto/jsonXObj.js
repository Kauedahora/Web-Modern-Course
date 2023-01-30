const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}};
console.log(JSON.stringify(obj));   //converte valores em javascript para uma String JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3"}")); Não funciona
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")); Não funciona

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": [{"nome": "Kauê", "idade": 21}, {"legal": false}]}'));