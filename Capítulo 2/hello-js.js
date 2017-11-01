
var mensagemCallback = function(){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1> Hello Word</h1> ");
	response.end();
}

var serverAtivoCallback = function(){
	console.log("Servidor Ativo");
}

//Forma 1 de fazer
var http = require('http');

var  server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1> Hello Word</h1> ");
	response.end();
});

server.listen(3000);

//Forma 2 de fazer
//server =  http.createServer(mensagemCallback);
//server.listen(3000, serverAtivoCallback);

// Para dar mensagens de ativação ou desligamento do server:

//server.listen(3000, function(){
//console.log("Servidor Ativo")
//});