raio = parseFloat(prompt("Digite o valor do raio (em m):"));
	console.log("raio: " + raio);

area = parseFloat(3.14 * raio * raio);
	console.log("área: " + area);

document.write("O raio do círculo mede: " + raio.toFixed(2) + "m" + "<br>");
document.write("A área do círculo mede: " + area.toFixed(2) + "m");