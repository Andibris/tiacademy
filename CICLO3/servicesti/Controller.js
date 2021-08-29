const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );    
    res.send('Novo cliente cadastrado!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Novo pedido criado!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});