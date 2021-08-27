ano_nasc = parseInt(prompt("Digite seu ano de nascimento:"));
	console.log("ano nasc: " + ano_nasc);

ano_atual = parseInt(prompt("Digite o ano atual:"));
	console.log("ano atual: " + ano_atual);

idade = (ano_atual - ano_nasc);
	console.log("idade: " + idade);

idade_fut = (2030 - ano_nasc);
	console.log("idade 2030: " + idade_fut);

document.write("Ano de nascimento: " + ano_nasc + "<br>");
document.write("Ano atual: " + ano_atual + "<br>");
document.write("Idade: " + idade + "<br>");
document.write("Idade em 2030: " + idade_fut);