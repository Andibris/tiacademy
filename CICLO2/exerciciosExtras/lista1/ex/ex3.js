nota1 = parseFloat(prompt("Insira a primeira nota:"));
peso_nota1 = parseInt(prompt("Insira o peso da primeira nota:"));
nota2 = parseFloat(prompt("Insira a segunda nota:"));
peso_nota2 = parseInt(prompt("Insira o peso da segunda nota:"));
nota3 = parseFloat(prompt("Insira a terceira nota:"));
peso_nota3 = parseInt(prompt("Insira o peso da terceira nota:"));
media = (nota1 * peso_nota1 + nota2 * peso_nota2 + nota3 * peso_nota3)/(peso_nota1 + peso_nota2 + peso_nota3);

console.log("nota 1: " + nota1);
console.log("peso nota 1: " + peso_nota1);
console.log("nota 2: " + nota2);
console.log("peso nota 2: " + peso_nota2);
console.log("nota 3: " + nota3);
console.log("peso nota 3: " + peso_nota3);
console.log("media ponderada: " + media.toFixed(1));

document.write("Nota 1: " + nota1 + "<br>");
document.write("Peso Nota 1: " + peso_nota1 + "<br>");
document.write("Nota 2: " + nota2 + "<br>");
document.write("Peso nota 2: " + peso_nota2 + "<br>");
document.write("Nota 3: " + nota3 + "<br>");
document.write("Peso nota 3: " + peso_nota3 + "<br>");
document.write("Média ponderada: " + media.toFixed(1));
