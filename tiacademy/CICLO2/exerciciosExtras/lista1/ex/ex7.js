salario_base = parseFloat(prompt("Insira o valor do salário base (use ponto para separar decimais):"));
	console.log("Salário base: " + salario_base.toFixed(2));

salario_liquido = parseFloat(salario_base + 600 - salario_base * 0.1);
	console.log("Salário líquido: " + salario_liquido.toFixed(2));

document.write("Salário base: " + salario_base.toFixed(2) + "<br>");
document.write("Salário líquido: " + salario_liquido.toFixed(2));