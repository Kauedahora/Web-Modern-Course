const fs = require("fs");

const caminho = __dirname + "/arquivo.json"

// Síncrono
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// Assíncrono

fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo); // Só irá funcionar o log abaixo, se o conteudo for um objeto
    console.log(`${config.db.host}:${config.db.port}`);
})

// Pode fazer assim para ler um arquivo JSON (ao invés de acima, é mais simples e não precisa dar parse)
const config = require("./arquivo.json")
console.log(config.db);

// Assim a leitura de uma pasta!
// leia um diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta ...");
    console.log(arquivos);
});