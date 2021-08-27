// inner pega também a instrução HTML o textContent pega o texto limpo, sem tags!

window.onload=function(){

//                      PRODUTOS
   (()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += 
        `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}`        
    }
   })(produtos) // ( ) no final = auto executar

//                      COMPRA

// percorre o elemento produtos e faz uma li.itemProduto item atributo
const itemProduto = document.querySelectorAll("ul#produtos > li.itemProduto");
//armazenar itens da compra / inserir no carrinho
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
//mostraTotalCompra = recebe total da compra e mostra pro cliente
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
//criação de array para escolher apenas 1 produto
const armazenaItem=[];

var totalPedido =0;

itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{

        li = document.createElement("li");//  createElement = criou a lista!
        //referencia para saber se tem um produto ja lançado = método indexOf()

        if(armazenaItem.indexOf(item.textContent) == -1){
            //se não encontrar no armazem, então ele é "-1" - /\
            // entao vamos pedir para armazenar na lista - \/
            armazenaItem.push(item.textContent);
            // mostra pro cliente que foi inserido na lista - \/
            //itemProduto.textContent(item.textContent); nao deixa ir para cesta
            // criar e add
            cestaDoCliente.appendChild(li).textContent = item.textContent;
       		totalPedido += Number(item.dataset.preco);
            //mostra valor do total Pedido na moeda corrente
            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"});
           
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }

    });


});
    var list = document.getElementById("cestaDoCliente");
    cestaDoCliente.addEventListener("click", function(event) {
    console.log(event.target); // este é o elemento clicado
    alert('O item selecionado foi ' + event.target.innerHTML + '.');
    
    remover = confirm("deseja remover o produto?");
        if(remover == true){
            alert("O item foi removido da cesta.");
            cestaDoCliente.removeChild(event.target);
        }
        else{

        }
        
    })



}// fim

// pegar legenda da fruta e preço para executar um cálculo!