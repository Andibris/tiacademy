/*
salario = parseFloat(prompt("Insira o valor do salário inicial (use ponto para separar decimais):"));
	console.log("Salário base: " + salario.toFixed(2) + "<br>");

gratificacao_imposto = parseFloat(salario - salario * 0.02);
	console.log("Salário líquido: " + gratificacao_imposto);

document.write("Salário bruto: " + salario.toFixed(2) + "<br>");
document.write("Salário líquido: " + gratificacao_imposto.toFixed(2));

ou
*/

salario = parseFloat(prompt("Insira o valor do salário inicial (use ponto para separar decimais):"));
	console.log("Salário base: " + salario.toFixed(2) + "<br>");

salario_liquido = parseFloat(salario + salario * 0.05 - salario * 0.07);
	console.log("Salário líquido: " + salario_liquido);

document.write("Salário bruto: " + salario.toFixed(2) + "<br>");
document.write("Salário líquido: " + salario_liquido.toFixed(2));