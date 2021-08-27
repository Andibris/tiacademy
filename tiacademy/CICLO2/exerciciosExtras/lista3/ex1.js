numero1 = parseInt(prompt("Digite o primeiro número:"));
console.log(numero1);

numero2 = parseInt(prompt("Digite o segundo número:"));
console.log(numero2);

if(numero1 > numero2){
	console.log("número 1 é maior que número 2");
	document.write("O maior número é o número " + numero1);
}

else if(numero2 > numero1){
	console.log("número 2 é maior que número 1");
	document.write("O maior número é o número " + numero2);
}

else{
	console.log("número 1 é igual ao número 2");
	document.write("Os números digitados são iguais");
}