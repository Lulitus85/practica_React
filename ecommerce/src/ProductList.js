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
 
      fetch('http://localhost:4000/productos')
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

  decrementStock = (e) => {
      let products = this.state.products.map(p => {
        if(p.id == e.currentTarget.value) {
            return {
                ...p, //los 3 puntos copian los atributos de p
                stock:p.stock-1,
            }
        }
        return p
    })

    this.setState({products}) //guardamos la nueva info del producto 
}

  render(){
    return (
        <div>  
        <h1>Listado de Productos</h1>     
        <a href="#listado" onClick={this.listProducts}> ver lista de productos </a> 
        {
            this.state.listing ? 
            this.state.products.map((p,i) =>  <Product key={i} buyAction={this.decrementStock} info={p} />) : ''
        }

        </div>

       
    );
  }

}

export default ProductList;
