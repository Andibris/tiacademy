import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import { Menu } from './components/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';
import { Pedido } from './pages/Pedido/Pedido';
import { Cadastrar } from './pages/Servico/Cadastrar';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
