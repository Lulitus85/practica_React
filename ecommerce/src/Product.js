import React from 'react';
import ProductList from './ProductList'

class Product extends React.Component {
  
  render(){
    return (
       <div> 
        <h2>Nombre: {this.props.info.name}</h2>
        <h2> Stock: {this.props.info.stock}</h2>
        <h2> Precio: {this.props.info.price}</h2>
        
        {
            this.props.info.stock == 0?
            'Sin stock':
            <button value={this.props.info.id} onClick={this.props.buyAction}>Comprar </button>
        }
        <p>Hermano Querido</p>
       </div>  
    );
  }

}

export default Product;
