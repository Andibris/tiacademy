deposito = parseFloat(prompt("Digite o valor do depósito:"));
	console.log("Depósito: " + deposito.toFixed(2));

juros = parseInt(prompt("Digite a taxa de juros em %"));
	console.log("taxa juros: " + juros);

saldo = parseFloat(deposito + deposito * juros / 100);
	console.log("Saldo: " + saldo.toFixed(2));

document.write("Valor do depósito: " + deposito.toFixed(2) + "<br>");
document.write("Juros: " + juros + "<br>");
document.write("Seu saldo será de: " + saldo.toFixed(2));