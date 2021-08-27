/* Faça um programa que receba três notas,
calcule e mostre a média aritmética entre elas. */

nota1 = parseFloat(prompt("Digite a primeira nota (por favor use pontos para separar as casas decimais)"));
console.log("nota 1: " + nota1.toFixed(1));

nota2 = parseFloat(prompt("Digite a segunda nota:"));
console.log("nota 2: " + nota2.toFixed(1));

nota3 = parseFloat(prompt("Digite a terceira nota:"));
console.log("nota 3: " + nota3.toFixed(1));

soma = nota1 + nota2 + nota3;

media = soma/3;
console.log("média: " + media.toFixed(1));
document.write("A média final é: " + media.toFixed(1));