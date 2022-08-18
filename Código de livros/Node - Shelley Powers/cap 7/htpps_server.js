var   fs = require("fs"),
      https = require("https");

//Precisamos da chave publica para o uso do SSL, e também o certificado.
var privateKey = fs.readFileSync('site.key').toString();
var certificate = fs.readFileSync('final.crt').toString();

var options = {
   key: privateKey,
   cert: certificate
};

https.createServer(options, function(req,res) {
   res.writeHead(200);
   res.end("Hello Secure World\n");
}).listen(443);