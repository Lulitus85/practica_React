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
        //al reduce le voy a pasar dos parametros, el previo y el que voy a estar leyendo (o sea el nuevo al sumar productos)
    let total = this.state.products.reduce((prev, current) => { //esto va a restar el valor total como si fuera un carrito y el comprar seria un delete del carrito.
        return Math.round(prev + current.stock * current.price) //el total previo mas la cantidad de stock nuevo por el precio nuevo
    }, 0) // cero porque va a ser el valor inicial.

    return (
        <div>  
        <h1>Listado de Productos</h1>     
        <a href="#listado" onClick={this.listProducts}> ver lista de productos </a> 
        <p> Total a pagar: $ {total} </p>
        {
            this.state.listing ? 
            this.state.products.map((p,i) =>  <Product key={i} buyAction={this.decrementStock} info={p} />) : ''
        }

        </div>

       
    );
  }

}

export default ProductList;
