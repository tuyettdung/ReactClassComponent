import React, { Component } from 'react'
import ItemProduct from './ItemProduct'

export default class ListProduct extends Component {
  render() {
    let {arrProduct} = this.props;
    return (
      <div className='container'>
        <h1 className='text-center'>Shoes Shop</h1>
        <div className='row'>
          {arrProduct.map((prod,index)=>{
            return <div className='col-3 my-2' key={index}>
                <ItemProduct item={prod}/>
            </div>
         })}
        </div>
      </div>
    )
  }
}
