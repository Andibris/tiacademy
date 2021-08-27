//....

if(x > 0){
	if(x < y){
		//bloco de comandos 1
	} else{
		//bloco de comandos 2
	}
} else{
	if(x == z){
		//bloco de comandos 3
	} else{
		//bloco de comandos 4
	}
}

//fazer isso só com um if...um

//if da linha 4
if(x > 0 && x < y){
	//bloco de comandos 1
} 

//else da linha 6
if(x > 0 && x >= y){
	//bloco de comandos 2
}

//if da linha 10
if(x <= 0 && x == z){
	//blocod e comandos 3
}

//else da linha
if(x <= 0 && x != zz){
	//bloco de comandos 4
}


//laço

/*n = parseFloat(prompt("Digite um número"));
n2 = parseFloat(prompt("Digite um número"));
n3 = parseFloat(prompt("Digite um número"));
n4 = parseFloat(prompt("Digite um número"));
n5 = parseFloat(prompt("Digite um número"));
..*/

//pra nao fazer assim repetição, pedir pra máquina repetir:;

//Expressões lógico-relacionais
//Condições criadas a partir dos operadores >, >=, <, <=, ==, !=, &&, ||, !;

let x = 0;

while(x < 3){
	console.log(x);
	x = x + 1; // também pode ser x++;
}