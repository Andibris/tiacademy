base = parseFloat(prompt("Qual o valor da base do triângulo?"));
	console.log("base: " + base);

altura = parseFloat(prompt("Agora, digite o valor da altura do triângulo:"));
	console.log("altura: " + altura);

area = parseFloat(base * altura / 2);
	console.log("área: " + area);

	document.write("A base do triângulo mede: " + base.toFixed(1) + "<br>");
	document.write("A altura do triângulo mede: " + altura.toFixed(1) + "<br>");
	document.write("A área do triângulo mede: " + area.toFixed(1));