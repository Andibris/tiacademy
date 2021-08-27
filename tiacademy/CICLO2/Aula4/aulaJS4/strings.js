/*var nome = "Anderson";

console.log(nome.length);
console.log(nome[0]); //A*/

/*match()
O método match procura uma palavra em uma string. Existem alguns parâmetros
de pesquisa que permitem uma maior precisão conforme a n 
flags g / i / m 
*/
var palavras = "Maçã doce";
//console.log(palavras.match(/d/gi)); d entre barras para procurar o d.
// g procura de modo global e i procura ignorando caixa baixa e caixa alta


/*search()
O método search() procura pela ocorrência e retornando a 
posição na cadeia da string, a posição é em relação ao primeiro caractere
da ocorrência.*/

//console.log(palavras.search(/d/gi));


/*replace()
Este método substitui uma string por outra, ele pesquisa a string informada,
como no método match e a substitui por outra string nas aspas informada
como segundo parâmetro.
*/
/*var str = "Lorem ipsum, dolor sit amet consectetur adipisicing, elit. " +
"Nulla expedita eum aperiam mollitia ipsa voluptatibus qui tenetur vel repellendus";

var mudarStr = str.replace(/e/gi,'X'); //letra que quero tirar, gi para compreender toda a extensao da string e por ultimo, a letra que quero colocar no lugar.

console.log(mudarStr);*/



/*localeCompare()
O método localeCompare compara, efetua a comparação entre duas strings,
se estas forem iguais o retorno será 0. Os valores -1 e 1 podem ser 
esperados caso elas não sejam iguais.
*/

/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();*/
//console.log(`Este é o c1: ${c1} Este é o c2 ${c2}`);

/*var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/



/*trim()
Faz a remoção de espaços antes e depois da string especificada.
*/

var p = ' fpalavra+ ';

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi,'');
console.log(s);
var sub_a = s.replace('+',''); //remover e subst o sinal de +
console.log(`Removido: ${sub_a}`);


//toLocaleString()
//formatação de moedas
var valor = 1.357 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR',{
	style: 'currency',
	currency: 'BRL'
})

console.log(formatarMoeda);
