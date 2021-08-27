saque = parseInt(prompt("Digite o valor a ser sacado (Notas disponíveis: 2,00; 5,00; 10,00; 20,00; 50,00 e 100,00:"));
	console.log("saque: " + saque);

cem = parseInt(saque / 100);
	console.log("Notas de 100,00 " + cem);

cinquenta = parseInt((saque - cem * 100) / 50);
	console.log("Notas de 50,00 " + cinquenta);

vinte = parseInt((saque - cem * 100 - cinquenta * 50)/20);
	console.log("Notas de 20,00 " + vinte);

dez = parseInt((saque - cem * 100 - cinquenta * 50 - vinte * 20)/10);
	console.log("Notas de 10,00 " + dez);

cinco = parseInt((saque - cem * 100 - cinquenta * 50 - vinte * 20 - dez * 10)/5);
	console.log("Notas de 5,00 " + cinco);

dois = parseInt((saque - cem * 100 - cinquenta * 50 - vinte * 20 - dez * 10 - cinco * 5)/2);
	console.log("Notas de 2,00 " + dois);

document.write("Você sacou: R$" + saque.toFixed(2) + "<br>");
document.write("Quantidade de notas de R$100,00: " + cem + "<br>");
document.write("Quantidade de notas de R$50,00: " + cinquenta + "<br>");
document.write("Quantidade de notas de R$20,00: " + vinte + "<br>");
document.write("Quantidade de notas de R$10,00: " + dez + "<br>");
document.write("Quantidade de notas de R$5,00: " + cinco + "<br>");
document.write("Quantidade de notas de R$2,00: " + dois);