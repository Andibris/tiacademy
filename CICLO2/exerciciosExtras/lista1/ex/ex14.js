numero1 = parseInt(prompt("Escolha um número positivo:"));
	console.log("numero 1: " + numero1);
numero2 = parseInt(prompt("Agora, escolha outro número positivo:"));
	console.log("numero 2: " + numero2);

if(numero1 && numero2 > 0){
	elevado = Math.pow(numero1, numero2);
	console.log("num1 elevado a num2: " + elevado);
	document.write("O primeiro número escolhido foi: " + numero1 + "<br>");
	document.write("O segundo número escolhido foi: " + numero2 + "<br>");
	document.write("O primeiro número elevado ao segundo número é igual a: " + elevado);
}
else{
	alert("Não foi possível executar essa ação");
	console.log("Erro");
}