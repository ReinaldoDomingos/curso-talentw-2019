function calcular(){
	var n1 = document.getElementById('n1').value
	var n2 = document.getElementById('n2').value
	somar(n1,n2)
	var n3 = document.getElementById('n3').value
	var n4 = document.getElementById('n4').value
	subitrair(n3,n4)
	var n5 = document.getElementById('n5').value
	var n6 = document.getElementById('n6').value
	multiplicar(n5,n6)
	var n8 = document.getElementById('n8').value
	var n7 = document.getElementById('n7').value
	dividir(n7,n8)
}

function somar(x,y){
	var res = Number(x) + Number(y)
	document.getElementById('res1').value = res
}

function subitrair(x,y){
	var res = Number(x) - Number(y);
	document.getElementById('res2').value = res;
}

function multiplicar(x,y){
	var res = Number(x) * Number(y)
	document.getElementById('res3').value = res
}

function dividir(x,y){
	var res = Number(x) / Number(y)
	document.getElementById('res4').value = res
}