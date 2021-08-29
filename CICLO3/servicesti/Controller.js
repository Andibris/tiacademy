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

app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome: "Anderson Breschigliaro",
        endereco: "Rua dois, 150",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1989-12-13",
    });    
    res.send('Novo cliente cadastrado!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.get('/pedidos', async(req,res)=>{
    let create=await pedido.create({
        idCliente: "1",
        idServico: "1",
        valor: "550",
        data: "2021-08-27",
    });
    res.send('Novo pedido criado!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});