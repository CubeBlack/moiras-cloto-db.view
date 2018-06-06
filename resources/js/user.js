user = [];
user.logued = false;
user.load = function(){
	user.get();
}
user.first = true;
user.get = function(){
	retorno = function(msg){
		if(msg[0]!="{"){
			console.log(msg);
			return;
		}
		tUser = JSON.parse(msg);
		user.id = tUser.id;
		user.nick = tUser.nick;
		user.poder = tUser.posder;
		user.email = tUser.email;
		user.titulo	 = tUser.titulo;
		
		if(user.id == "0" ){
			//document.getElementById("user-link").innerHTML = "Logar";
			user.logued = false;
		}
		else{
			user.logued = true;
		}
		
		if(user.first){
			user.first == false;
			console.log("aqui");
			page.search();
		}
		//document.getElementById("user-link").innerHTML = user.titulo + " " + user.nick;
	}
	com = "user.me(json)";
	term.com(com,retorno);
}
user.perfil = function(){
	if(user.logued){
		page.popUp();
		var perfilDados = {
		"titulo":user.titulo,
		"id":user.id,
		"poder":user.poder,
		"email":user.email,
		"nick":user.nick
		};
		perfil = page.replace(user.tPerfil,perfilDados);
		page.popContent(perfil);
		return;
	}
	user.formLogin();
}
user.formLogin = function (){
	page.popUp();
	page.popContent(user.tFormLogin);
}
user.logar = function(){
	retorno = function(msg){
		console.log(msg);
		if(msg == "Ok!"){
			user.logued = true;
			page.popUp();
		}
		else{
						
		}
		page.search();
		user.get();
		document.getElementById("FormLogin-retorno").innerHTML = msg;
	}
	usuario = document.getElementById("FormLogin-user").value;
	pass = document.getElementById("FormLogin-pass").value;
	com = "";
	com +="user.login(";
	com += usuario + ","
	com += pass + ")"
	term.com(com,retorno);
	console.log(com);
}
user.sair = function(){
	retorno = function(msg){
		user.get();
		page.search();
	}
	term.com("user.sair()",retorno);
}
user.tPerfil = "<h1>{titulo} {nick}</h1><p><label>ID</label>: {id}</p><p><label>e-mail</label>: {email}</p><p><label>poder</label>: {poder}</p><input type='button' value='Sair' onclick='page.popUp();user.sair();'><input type='button' value='Cancelar' onclick='page.popUp()'>";
user.tFormLogin = "<h1>Usuario Cloto</h1><label id='FormLogin-retorno'></label><form><label>nick/e-mail</label><input id='FormLogin-user'><label>senha</label><input id='FormLogin-pass' type='password'><input type='button' value='Logar' onclick='user.logar();'><input type='button' value='Cancelar' onclick='page.popUp()'></form>";

console.log("user.js");