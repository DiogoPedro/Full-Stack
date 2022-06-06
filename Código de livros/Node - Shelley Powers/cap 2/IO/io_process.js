//Codigo atualizado e correto, abaixo:

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
   var input;
   while ((input = process.stdin.read()) !== null) {
      process.stdout.write(input);
      var command = input.trim();
      
      if (command == 'exit') {
         process.exit(0);
      }
   }
});