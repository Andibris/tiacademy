var nome = prompt("Digite seu nome");
var numero = prompt(nome + ", escolha um número.")
	if(numero == parseInt(numero)){
		console.log("O valor da entrada é um inteiro.");
	}
	else{
		console.log("O valor da entrada não é um inteiro.");
	}
function alerta(){
	alert("Uma string foi enviada.");
	alert("A string será convertida em número.");
}
	alerta();
numero = parseInt(numero);
var n = 13;
var comp = (numero == n);
var soma = (numero + n);
var subt = (numero - n);
var divs = (numero % n);
var quad = (numero * numero);
var fruta = prompt("Agora, digite entre uma das seguintes frutas: pêra, uva ou maçã");
console.log(fruta);

document.write("1 - Seja bem vindo, " + nome +". <br>");
document.write("2 - Você digitou o número: " + numero + "<br>");
document.write("3 - O retorno da comparação booleana é: " + comp + "<br>");
document.write("4 - A soma dos valores é: " + soma + "<br>");
document.write("5 - A subtração dos valores é: " + subt + "<br>");
document.write("6 - O resto da divisão é de: " + divs + "<br>");
document.write("7 - O quadrado do número é: " + quad + "<br>" + "<br>");

var a= "pêra";
var b= "uva";
var c= "maçã";
	if(fruta == a){
		document.write("Você escolheu: "+ a);
	}
	else if(fruta == b){
		document.write("Você escolheu: "+ b);
	}
	else if(fruta == c){
		document.write("Você escolheu: "+ c);
	}
	else{
		alert(nome + ", a fruta escolhida não está listada!");
	}