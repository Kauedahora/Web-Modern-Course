const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }

    res.end("Concluído com sucesso.");
  });
});

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true })); // Se vier algum formato a partir de um submit de formulário, este código será responsável por ler os dados e transformar em objeto
app.use(bodyParser.json()); // Se vier um JSON dentro do body da requisição, este transforma o JSON em objeto

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});

app.get("/parOuImpar", (req, res) => {
  // Dentro do express, existem formas de receber dados no frontend
  // 1: req.body (usamos no exemplo acima)
  // 2: req.query (quando faz um get, usamos dentro da consulta "?" e passa os parâmetros, ex: ...8080/parOuImpar?numero=3... )
  // 3: req.params (caso utilize: ...8080/parOuImpar/123.. )
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? "par" : "impar",
  });
});

// app.get("/teste", (req, res) => res.send("Ok")); // Função middleware, será chamada quando /teste for invocado a partir de uma requisição get.

app.listen(port, () => console.log(`Executando o servidor na porta ${port}`));
