/* objetos */

function Pessoa(nome, sobrenome, idade){ /*pode ser qlq nome*/
	this.nome = nome; //nome é o parâmetro da pessoa
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa("Anderson", "Breschigliaro", "31 anos"); //construtor
console.log("Nome " + ps1.nome +" " + ps1.sobrenome + " " + ps1.idade);

var ps2 = new Pessoa("Ana");
console.log("Nome " + ps2.nome +" " + ps2.sobrenome);


/* outra forma de criar objeto*/
var objPessoa = { rg : '12345', cpf : '1235212'}

/* console.log(typeof(objPessoa)); */
console.log("RG" + objPessoa.rg);

function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : '777', 
		cpf : '8989'
	}
}

var pessoa2 = new Pessoa2("Rafael");
//console.log("Nome: " + pessoa2.nome + " " + pessoa2.doc.rg);

/*concatenar sem +*/
console.log(`Nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);