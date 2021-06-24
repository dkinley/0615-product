import './App.css';
import ListAll from './components/ListAll';
import NewProduct from './components/NewProduct';
import Edit from './components/Edit';
import Details from './components/Details';
import { Router } from '@reach/router'; // since router is not exported as default {} are required


function App() {
  return (
    <div className="App">
    <Router>
      <ListAll path="/" />
      <ListAll path="/product" />
      <NewProduct path="/product/new" />
      <Edit path="/product/:id/edit" />
      <Details path="/product/:id"/> 
    </Router>
  </div>
  );
}

export default App;
