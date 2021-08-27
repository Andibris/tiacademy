numero = parseInt(prompt("Escolha um número maior que 0:"));
	console.log("numero " + numero);

if(numero > 0){
	quadrado = parseInt(Math.pow(numero, 2));
	console.log("Quadrado: " + quadrado);
	cubo = parseInt(Math.pow(numero, 3));
	console.log("Cubo: " + cubo);
	raizq = parseFloat(Math.pow(numero, 0.5));
	console.log("Raiz quadrada: " + raizq);
	raizc = parseFloat(Math.pow(numero, 1/3));
	console.log("Raiz cúbica: " + raizc);

	document.write("O número escolhido foi: " + numero + "<br>");
	document.write("O quadrado do número escolhido é: " + quadrado + "<br>");
	document.write("O cubo do número escolhido é: " + cubo + "<br>");
	document.write("A raiz quadrada do número escolhido é: " + raizq.toFixed(2) + "<br>");
	document.write("A raiz cúbica do número escolhido é: " + raizc.toFixed(2));
}
else{
	console.log("erro");
	alert("Não foi possível executar essa ação!");
}