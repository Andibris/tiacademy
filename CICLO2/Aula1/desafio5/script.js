var nome = prompt("Digite seu nome");
document.write("1 - Seja bem vindo, " + nome +". <br>");

var numero = prompt(nome + ", escolha um número.")
document.write("2 - Você digitou o número: " + numero + "<br>");

numero = parseInt(numero);
var n = 13;

var comp = (numero == n);
document.write("3 - O retorno da comparação booleana é: " + comp + "<br>");

var soma = (numero + n);
document.write("4 - A soma dos valores é: " + soma + "<br>");

var subt = (numero - n);
document.write("5 - A subtração dos valores é: " + subt + "<br>");

var divs = (numero % n);
document.write("6 - O resto da divisão é de: " + divs + "<br>");

var quad = (numero * numero);
document.write("7 - O quadrado do número é: " + quad);