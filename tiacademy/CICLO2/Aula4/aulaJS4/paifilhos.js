window.onload=function(){


	const pai = document.querySelectorAll("#pai");
	
	pai.forEach((capturarFilhas)=>{

		capturarFilhas.addEventListener('click',(filha)=>{
			
			console.log(filha);
		})
	})
	
	const btn = document.querySelector("#btn");
	const outroPai = document.querySelector("#outroPai");
	var i=0;

	btn.addEventListener('click', ()=>{
 		
		let lista = ["banana", "uva", "pera", "manga"]

 		li = document.createElement("li");

 		outroPai.appendChild(li).textContent = lista[i]; //anexa ao elemento pai
		li.setAttribute("class", "itemL") //pega o elemento criado e atribui a classe

	});

	const paiDaLista = document.querySelectorAll("#outroPai");

	paiDaLista.forEach(listaDeFilhas=>{
		listaDeFilhas.addEventListener('click',(filhas)=>{
			alert(filhas.target.textContent);
		})

	})

}