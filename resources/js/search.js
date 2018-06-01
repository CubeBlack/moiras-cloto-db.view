page.query = "";
page.respostaOld = "";
page.searchN = 0;

page.search = function(){
	if(!user.logued){
		user.formLogin();
		return;
	}
	comStr= "";
	comStr += "dado.search(strBegin\"";
	comStr += page.query;
	comStr += "\"strEnd,json)";
	sTerm.com(comStr,page.rSearch);
}
page.setQuery = function(query){
	page.query = query;
	document.getElementById("searchInput").value = query;
	page.search();
	console.log("Query='" + page.query + "'");
}
page.rSearch = function(msg){
	page.SearchCount();
	if(page.respostaOld == msg){
		return;
	}
	if(msg[0]!="["){
		document.getElementById("content").innerHTML = msg;
		return;
	}
	dados = JSON.parse(msg);
	resposta = page.tFirstDado;
	for(indice = 0; indice < dados.length; indice++){
		resposta += "<dado>";
			resposta += "<id>";
				resposta += dados[indice].id;
			resposta += "</id>";
			resposta += " - ";
			resposta += "<user>";
				resposta += dados[indice].user.nick;
			resposta += "</user>";
			resposta += "<valor>";
				
				resposta += dados[indice].dado;
			resposta += "</valor>";
			resposta += "<tag>";
			for(iTag = 0; iTag < dados[indice].tag.length; iTag++){
				resposta += "<a onClick=\"page.setQuery('"+dados[indice].tag[iTag]+"')\">#";
				resposta += dados[indice].tag[iTag];
				resposta += ", </a>";
			}
			resposta += "</tag>";
			resposta += "<editar>";
				resposta += "<input type='button' value='Drop' onClick=\"page.drop('"+dados[indice].id+"')\">"
				resposta += "<input type='button' value='Edit' onClick=\"page.editOpen('"+dados[indice].id+"')\">"
			resposta += "</editar>";
		resposta += "</dado>";
	}
	
	document.getElementById("content").innerHTML = resposta;
	console.log(dados);
	page.respostaOld = msg;
	
}
page.SearchCount = function(){
	++page.searchN;
	aLoading = ["-|||||||","|-||||||","||-|||||","|||-||||","||||-|||","|||||-||","||||||-|","|||||||-",];
	searchlabel = "";
	searchlabel += "[";
	searchlabel += aLoading[page.searchN%8];
	searchlabel += "]"
	if(page.searchN > 1000) page.searchN = 0;
	
	document.getElementById("aSearch").innerHTML = searchlabel;
}
page.iSearch = function(){
	page.setQuery(document.getElementById("searchInput").value);
}