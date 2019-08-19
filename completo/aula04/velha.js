var casas = pegarElementos(".casa")
var jogador = pegarElementos('#jogador',1)
var ganhador = pegarElementos('#ganhador',1)
var btIniciar = pegarElementos('#iniciar',1)
var infoJogador = pegarElementos('.jogador',1)
var infoGanhador = pegarElementos('.ganhador',1)
var infoVelha = pegarElementos('.velha',1)
var acabouJogo,jogadorGanhador

btIniciar.addEventListener('click', iniciar);

function pegarElementos(atributo,qtd) {
	if(qtd)	return document.querySelector(atributo);
	else return document.querySelectorAll(atributo);
}

function alterarVisibilidade(elemento,status){
	if(status)
		elemento.style.display = 'unset'
	else			
		elemento.style.display = 'none'
} 

function alterarTexto(elemento,texto){
	elemento.innerHTML = texto
}

function getCasasVazias(){
	var casasVazias = pegarElementos(".vazia")
	return casasVazias.length
}

function iniciar(){
	console.log('iniciar')
	acabouJogo = false;
	jogadorGanhador = undefined
	alterarVisibilidade(infoJogador,true)
	alterarVisibilidade(btIniciar)

	var  sorteio = Math.random();
	if(sorteio>0.5){
		alterarTexto(jogador,'X')
	}
	else{
		alterarTexto(jogador,'&#9711;')
	}

	casas.forEach(function(casa){
		casa.addEventListener('click', selecionar);
	});
}

function selecionar() {
	console.log('selecionar')
	if(estaVazia(this) && !acabouJogo){
		if(jogador.innerHTML=='X'){
			addX(this)
		}else {
			addO(this)
		}
		this.classList.remove('vazia')
	}
	verificarVitoria()
}

function estaVazia(casa){
	return casa.classList.contains("vazia")
}

function addX(casa){
	console.log('jogador x clicou')
	casa.classList.add('x')
	casa.classList.remove('o')
	alterarTexto(casa,'X')
	alterarTexto(jogador,'&#9711;')
}

function addO(casa){
	console.log('jogador o clicou')
	casa.classList.add('o')			
	casa.classList.remove('x')
	alterarTexto(casa,'&#9711;')
	alterarTexto(jogador,'X')
}	

function verificarVitoria(){
	var classes = ['topo','meio','embaixo','esquerda','meioV','direita','diagonal','diagonalO'];
	verificarTodasPossibilidades(classes)
	temVitoria()
}

function verificarTodasPossibilidades(classes){
	classes.forEach(function(c){
		temVitoriaNaClasse(c)
	})
}

function temVitoriaNaClasse(classe){
	var casasX = pegarElementos('.' + classe +'.x')
	if(casasX.length==3)  jogadorGanhador = 'X';
	var casasO = pegarElementos('.' + classe + '.o')
	if(casasO.length==3) jogadorGanhador = '&#9711;';
}

function temVitoria(){
	if(jogadorGanhador!=undefined){
		fimDoJogo(jogadorGanhador)
	}else if(getCasasVazias()==0){
		alterarVisibilidade(infoVelha,true)
		alterarVisibilidade(infoJogador)
		alterarVisibilidade(btIniciar,true)
		alterarTexto(btIniciar,'Reiniciar')
		btIniciar.addEventListener('click', reiniciar)	
		acabouJogo = true
	}
}

function fimDoJogo(jogadorGanhador){
	console.log('fim do jogo')
	alterarTexto(ganhador,jogadorGanhador)
	alterarVisibilidade(infoGanhador,true)
	alterarVisibilidade(infoJogador)
	alterarTexto(btIniciar,'Reiniciar')
	alterarVisibilidade(btIniciar,true)
	btIniciar.addEventListener('click', reiniciar)
	acabouJogo = true
}

function reiniciar(){
	console.log('reiniciar')
	alterarVisibilidade(infoGanhador)
	alterarVisibilidade(infoVelha)			
	casas.forEach(function(casa){
		casa.classList.remove('o')
		casa.classList.remove('x')
		casa.classList.add('vazia')
		alterarTexto(casa,'')
	});
	iniciar();			
}