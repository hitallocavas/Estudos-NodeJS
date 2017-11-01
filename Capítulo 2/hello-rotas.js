var http = require("http");

var roteamento = function(request,response){
	response.writeHead(200, {"Content-Type":"text-html"});

	if(request.url == "/"){
	response.write("<h1> Estamos na Home <h1/>");
	}
	else if(request.url == "/bemvindo"){
	response.write("<h1> Seja Bem Vindo ao Nosso Sistema <h1/>");
	}
	else{
	response.write("<h1> Página Não Encontrada <h1/>")	
	}
}

var callbackMessageServer = function(){
	console.log("Servidor Ativo");
}

var server = http.createServer(roteamento);
server.listen(3000, callbackMessageServer);