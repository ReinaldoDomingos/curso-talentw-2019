var btnAdd = pegarElementos(".btAdd",1)
var btnOpcoes = pegarElementos(".btOpcoes")
var btnsOpcoes = pegarElementos(".btsOpcoes")
var section = pegarElementos('section',1)
var nav = pegarElementos('nav',1)
var linhas = pegarElementos('.linha')

btnAdd.addEventListener('click', adicionar);
btnOpcoes[0].addEventListener('click', abrirOpcoes);

function pegarElementos(atributo,qtd) {
	if(qtd)	return document.querySelector(atributo);
	else return document.querySelectorAll(atributo);
}
var elemento;

function adicionar(){
	console.log("add")
	elemento = section;
	var id = linhas.length+1;
	var linha = document.createElement('div')
	linha.setAttribute('id','linha'+id)
	linha.classList.add('linha')
	linha.innerHTML = '<h1>Titulo da nota <span id="btOpcoes">⁝</span>'
	+'<span>'
	+'<ul class="btsOpcoes">'
	+'<li class="abrir" onclick="abrir()"><a>Abrir</a></li>'
	+'<li class="deletar" onclick="deletar('+id+')"><a>Deletar</a></li>'
	+'</ul>'
	+'</span>'
	+'</h1>'
	+'<p>descrição resumida da nota </p>'
	section.appendChild(linha)
btnsOpcoes = pegarElementos(".btsOpcoes",1)

}

function deletar(id){
	console.log("deletar")
	var el = pegarElementos('#linha'+id,1)
	var parent = el.parentNode; parent.removeChild(el);
}
function abrir(){
	console.log("abrir")
}

function abrirOpcoes(){
	var status = btnsOpcoes.style.display;
	btnsOpcoes.style.display = 'unset'
	document.addEventListener('click',fecharOpcoes)
}	

function fecharOpcoes(el){
	var elemento = el.target.parentNode.outerHTML
	if(elemento===undefined){
		console.log('fechou')
		btnsOpcoes.style.display = 'none'
	}else if(elemento.indexOf('linha')!=-1  || 
		(elemento.indexOf('btsOpcoes')==-1 
			&& elemento.indexOf('abrir')==-1 
			&& elemento.indexOf('deletar')==-1)) {
		btnsOpcoes.style.display = 'none'
		document.removeEventListener('click',fecharOpcoes)
	}
}

function detectarDirecaoRolagem(){
	var lastScroll = 0;

	window.onscroll = function() {
		let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
		if (currentScroll > 0 && lastScroll <= currentScroll){
			lastScroll = currentScroll;
			nav.style.display = 'none'
		}else{
			lastScroll = currentScroll;
			nav.style.display = 'unset'
		}
	};
}

detectarDirecaoRolagem();