salario = parseFloat(prompt("Insira o valor do salário inicial (use ponto para separar decimais):"));
	console.log("Salário base: " + salario.toFixed(2) + "<br>");

novo_salario = parseFloat( salario + salario * 0.25);
	console.log("novo salário: " + novo_salario.toFixed(2));

document.write("Salário base: " + salario.toFixed(2) + "<br>");
document.write("Salário após aumento: " + novo_salario.toFixed(2));