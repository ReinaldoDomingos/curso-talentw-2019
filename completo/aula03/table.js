var qtdLinhas = 3,qtdColunas = 3;

function criarLinha() {
	var linha = document.createElement('tr')

	for (var i = 0; i < qtdColunas; i++) {
		var coluna = document.createElement('td')
		linha.appendChild(coluna)		
	}

	qtdLinhas++
	addLinha(linha)
}

function criarColuna() {
	var coluna = document.createElement('th')
	coluna.innerText='Coluna ' + (qtdColunas+1)
	addColuna(coluna,0)

	for (var i = 1; i < qtdLinhas; i++) {
		var coluna = document.createElement('td')
		addColuna(coluna,i)
	}
	qtdColunas++
}

function addLinha(elemento){
	tabela.children[0].appendChild(elemento)
}

function addColuna(elemento,nLinha){
	tabela.children[0].rows[nLinha].appendChild(elemento)
}

function limpar(){
	tabela.children[0].rows = []
}