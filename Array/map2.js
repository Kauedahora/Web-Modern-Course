const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }', 
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os preços

// Primeira function converte um texto para Objeto
const paraObjeto = json => JSON.parse(json);

// Segunda function recebe o valor de produto por parâmetro e retorna o preço do produto 
const apenasPreco = produto => produto.preco;

// Mapeio as duas functions e armazeno no resultado, resultando em um novo array de mesmo tamanho, mas mapeado.
const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);