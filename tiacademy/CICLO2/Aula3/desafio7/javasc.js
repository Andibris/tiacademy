window.onload = function(){ //sempre que for usar, tem que começar com essa linha dessa maneira.

const valor1 = document.querySelector("#valor1"); //querySelector busca no html a id, class, valor ou o que eu quiser e referencia aqui na constante.
const valor2 = document.querySelector("#valor2");
const valorResult = document.querySelector("#result");
const confirmar = document.querySelector("#soma");

	confirmar.addEventListener('click', ()=>{ //click pq ao clicar, o evento descrito ocorrerá... poderia ser outra ação (mover o mouse, scroll etc) como gatilho para a função
		var cx1 = Number(valor1.value); //estou dizendo q o valor (value) informado pelo usuario na box valor1 será do tipo number;
		var cx2 = Number(valor2.value);	
		var cxr = Number(valorResult.value); //valorResult poderia ser apenas result pelo que percebi a função puxa tanto o id do html quanto o nome que dei na constante.
		var res = cx1 + cx2; //apenas a operação para comparação através do if;
		
		if(res === cxr){ //está dizendo que se a variavel res for identica ao valor informado na box valor result...
		alert('O valor está correto!');
		}
		else{
		alert('O valor está errado!');
		}

	})

}