//Arrays:

var frutas = ["Uva", "Banana", "Amora", "Melão"]; // var frutas = Array();
console.log(`Quantidade do array: ${frutas.length} fruta: ${frutas[0]}`);

/*concat() Junta os elementos de dois ou mais arrays e retorna uma copia com os elementos juntos*/

var frutas2 = ["Maçã", "Pêra", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);

/*index Of()procura por um elemento especifico no array e retorna sua posição*/
var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf); //2

/*join() junta todos os elementos de um array em uma string*/
var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

/*push()insere um novo elemento no final do array*/
var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Peão");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

/*pop()remove o ultimo elemento do array*/
console.log(outraLista.pop());
console.log(outraLista);

/*reverse() inverte a ordem dos elementos do array;*/
console.log(outraLista.reverse());

/*shift() remove o primeiro elemento do array*/
var removerPrimeiro = ["fusca", "kadett", "variant"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

/*sort()ordena os elementos do array em ordem crescente*/
var alfa = [4, 6, 9, 2];
alfa.sort();
console.log(alfa);

/*toString()ordena os elementos do array en ordem crescente*/
//vide join

/*unShift() insere um novo elemento no inicio do array*/
alfa.unshift(10);
console.log(alfa);

/*splice() corta o array em um ponto indicando dois parametros: indice e qtos elementos 
quer remver a partir da posição;*/
var f = ["Uva", "Banana", "Amora", "Melão"]; // var frutas = Array();
var idx = f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx, 1 ));
console.log(f);

//var r = f.splice()
//console.log(f.splice();


//arrays de objetos
var dados = [
				{nome: "Marcelo"}, //0
				{nome: "Anderson"} //1
				
				]

//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : doc[0], 
		cpf : doc[1]	}
}

var pessoa2 = new Pessoa2("Rafael", " ", " ",['22','555']);
//console.log("Nome: " + pessoa2.nome + " " + pessoa2.doc.rg);

/*concatenar sem +*/
console.log(`Nome ${pessoa2.nome} - CPF: ${pessoa2.doc.cpf}`);