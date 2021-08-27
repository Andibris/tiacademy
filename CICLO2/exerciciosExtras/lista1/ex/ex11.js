tempos = parseInt(prompt("Digite o valor cronometrado (em s):"));
	console.log("tempo em s: " + tempos);

horas = parseInt(tempos / 3600);
	console.log("horas: " + horas);

minutos = parseInt(tempos / 60 - horas * 60);
	console.log("minutos: " + minutos);

segundos = parseInt(tempos % 3600 - minutos * 60);
	console.log("segundos: " + segundos);

document.write("O cronômetro marcou: " + tempos + " segundos." + "<br>");
document.write("Isto equivale à: " + horas + " h, " + minutos + " min, e " + segundos + " seg.");