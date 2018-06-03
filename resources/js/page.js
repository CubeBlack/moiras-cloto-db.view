page = [];
term = new Terminal();
sTerm = new Terminal();
//- - - - - Pop
page.loaded = function(){
	//------------ configuracao
	term = new Terminal();
	sTerm = new Terminal();
	
	term.server = "http://limapage.esy.es/servers/cloto/server-terminal.php";
	term.workerUrl = "http://cubeblack.github.io/Teminal/v002.1/terminal_v1.1worker.js";
	
	sTerm.server = "http://limapage.esy.es/servers/cloto/server-terminal.php";
	sTerm.workerUrl = "http://cubeblack.github.io/Teminal/v002.1/terminal_v1.1worker.js";
	
	sTerm.on();
	term.on();
	//------------------
	user.get();
}
//- - - - - PopUp
page.checkPop = false;
page.popUp = function(){
	//console.log("pop");
	this.checkPop = !this.checkPop;
	if(this.checkPop){
		document.getElementById("popUp").className = "popUP-true";
	}
	else{
		document.getElementById("popUp").className = "popUP-false";
	}

}
page.popContent = function(content=""){
	document.getElementById("popUp-content").innerHTML = content;
}
page.drop = function(id){
	com = "dado.drop(" + id + ")";
	console.log(com);
	term.com(com,page.rDrop);
};
page.rDrop = function(msg){
	console.log(msg);
	page.search();
}
page.tFirstDado = "<dado onclick='page.novaNota()'><id>Novo Dado</id><valor><img src='resources/img/new.svg'></valor></dado>";
page.notaform = "<div id=\"fNotaCabecario\"></div><form><label>Dado</label><textarea id=\"fNotaDado\"></textarea><label>Tags</label><textarea id=\"fNotaTag\"></textarea><input id=\"fNotaAplic\" onclick=\"\" value=\"Salvar\" type=\"button\"><input id=\"fNotaAplic\" onclick=\"page.popUp()\" value=\"Cancelar\" type=\"button\"></form>";
page.loginform = "<form><label>Dado</label><textarea id=\"novaNotaDado\"></textarea><label>Tags</label><textarea id=\"novaNotaTag\"></textarea><input onclick=\"page.novaNotaAplic()\" value=\"Salvar\" type=\"button\"></form>";
console.log("page.js");