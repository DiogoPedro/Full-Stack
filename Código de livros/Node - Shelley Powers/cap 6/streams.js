//Uma utilizacao sem stream;

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile(`${__dirname}/data.txt`, (err, data) => {
    res.end(data);
  });
});
server.listen(3000);

//Uma utilizacao com stream;

const http = require('http');
const fs = require('fs');

const server2 = http.createServer((req, res) => {
  const stream = fs.createReadStream(`${__dirname}/data.txt`);
  stream.pipe(res);
});
server.listen(3000);

//Examplo de stream de transformacao;
//Imagine que dest1 vai processa a informacao, transformando em outra coisa, enquanto dest2 apenas enviar para um outro local.
src.pipe(dest1).pipe(dest2);
