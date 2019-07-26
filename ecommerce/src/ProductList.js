import React from 'react';
import Product from './Product'

class ProductList extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          products : [],
          listing:false
      }
  }

  componentWillMount(){ //el fetch devuelve una promesa, entonces tengo que llamar al then
 
      fetch('http://localhost:4000/products')
        .then(response => response.json())  //si la llamada a la URL devuelve una respuesta, la convertis en json y se pasa a la siguiente function.
        
        .then(products => { // si la llamada a la URL devuelve una respuesta, tmb la pega en la consola.
            this.setState({
                products
            })
        })
//si puede que me devuelva error hago un catch.

    }

  listProducts = (e) => {  //el this nunca va a poder acceder al productList porque está fuera de scope, entonces usamos el arrow function para ir un scope para atras
    //
        this.setState({
          listing:true
        });
      console.log('hiciste click');
  }


  render(){
    return (
        <div>  
        <h1>Listado de Productos</h1>     
        <a href="#listado" onClick={this.listProducts}> ver lista de productos </a> 
        {
            this.state.listing ? 
            this.state.products.map((p,i) =>  <Product key={i} info={p} />) : ''
        }

        </div>

       
    );
  }

}

export default ProductList;
