pes = parseInt(prompt("Digite o valor em pés: "));
	console.log("pés: " + pes);
	document.write("Pés: " + pes + "<br>");

polegadas = parseInt(pes * 12);
	console.log("polegadas: " + polegadas);
	document.write("Polegadas: " + polegadas + "<br>");

jardas = parseFloat(pes / 3);
	console.log("jardas: " + jardas);
	document.write("Jardas: " + jardas.toFixed(2) + "<br>");

milhas = parseFloat(jardas / 1760);
	console.log("milhas: " + milhas);
	document.write("Milhas: " + milhas.toFixed(2));