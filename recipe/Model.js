const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// faz o parse de requisições com o corpo do tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// faz o parse de requisições com o corpo do tipo application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui
});

app.post('/', function (req, res) {
  // aqui estamos devolvendo ao cliente o corpo da requisição POST realizada pelo mesmo.
  res.end(JSON.stringify(req.body, null, 2))
});