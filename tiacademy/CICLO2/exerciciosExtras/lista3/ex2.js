numero1 = prompt("Digite o primeiro número:");
console.log(numero1);

numero2 = prompt("Digite o segundo número:");
console.log(numero2);

numero3 = prompt("Digite o terceiro número:");
console.log(numero3);

if(numero1 > numero2 && numero3){
	console.log("número 1 é maior que número 2 e 3");
	document.write("Condição satisfeita!");
}

else{
	console.log("número 1 não é maior que o número 2 e 3");
	alert("Erro!");
}