var palavra,dica,nao_descoberta,descoberta,erros,fim_jogo;

console.log('O jogo iniciou!')

function iniciar(){
	alert("Bem vindo ao Jogo Forca, peça a alguém ao lado para digitar uma palavra para você adivinhar!")
	palavra = prompt("Digite uma palavra:")
	dica = prompt("Digite uma dica para essa palavra:");
	nao_descoberta= palavra.toLowerCase();
	descoberta='';
	erros = 0;
	fim_jogo= false;
	
	for (var i = 0; i < palavra.length; i++) {
		descoberta += '_'
	}

	txtDica.innerText =  dica
	dicaPalavra.innerText =  descoberta
	btReiniciar.style.display = 'none'
	btReiniciar.addEventListener('click',iniciar)
	btAdivinharLetra.addEventListener('click',adivinharLetra)
	btAdivinharPalavra.addEventListener('click',adivinharPalavra)
}
iniciar()


function adivinharLetra() { 
	if(fim_jogo==true || txtLetra.value=='') return;
	if(txtLetra.value.length>1) return;	
	var pos = nao_descoberta.indexOf(txtLetra.value);
	if(pos==-1) erros++;
	while(pos!=-1){
		nao_descoberta = substitui(nao_descoberta,pos,'*')
		descoberta = substitui(descoberta,pos,txtLetra.value)
		dicaPalavra.innerText =  descoberta
		pos = nao_descoberta.indexOf(txtLetra.value);					
	}
	verificarVitoria()
	verificarDerrota()
}

function adivinharPalavra() {
	if(fim_jogo==true || txtPalavra == ''){return};
	if(txtPalavra.value.toLowerCase() == palavra.toLowerCase()) {
		dicaPalavra.innerText = palavra;
		descoberta = palavra;
	}else{
		erros=5
	}
	verificarVitoria()
	verificarDerrota()
}

function substitui(str,pos,char){
	p1 = str.substring(0,pos);
	console.log(p1)
	p2 =str.substring(pos+1,str.length);
	console.log(p2)
	return p1+char+p2;
}

function verificarDerrota(){
	if(erros>4){
		imagem.src = 'img/enforcado.jpg';
		info.innerText = "Voce perdeu!"
		fimjogo()
	}
	else{
		imagem.src = 'img/forca-' + erros+ '.jpg'
	}
}

function verificarVitoria(){
	if(descoberta.indexOf('_')==-1){
		info.innerText = "Voce ganhou!";
		fimjogo()
	}
}

function fimjogo(){
	fim_jogo = true;
	btReiniciar.style.display = 'block'
	btReiniciar.addEventListener('click',iniciar)
}