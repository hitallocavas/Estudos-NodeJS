//responsável pela leitura de arquivos
var fs = require('fs');

//Assíncrono
fs.readFile('index.html', function(erro, arquivo){
	if(erro) throw erro;
	console.log(arquivo);
});

//Síncrono
fs.readFileSync('index.html');
console.log('index.html');

