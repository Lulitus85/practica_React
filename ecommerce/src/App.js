import React from 'react';
import logo from './logo.svg';
import './App.css';
//Aquí importo el componente que cree llamado Product
//import Product from './Product'
import ProductList from './ProductList'


class App extends React.Component {
  constructor(props){
    super(props);
  //  this.state = {
  //    title: 'Ejemplo Componente'
  //  }

  this.state = {
    titulo :  `${this.props.title} ${this.props.tool}` . toUpperCase()
  }
   

    console.log(this)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{this.state.title}</h1>
            
            <h2>{this.props.title+ " "+ this.props.tool}</h2>
             
            <h2>{ (new Date).toString() }</h2> 

            <h2>{this.state.titulo}</h2>

            <h2>{this.state.titulo}</h2>

          
          

           
          </a>
          <ProductList />
        </header>
      </div>
    );
  }

}

export default App;
