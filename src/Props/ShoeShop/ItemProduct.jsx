import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    let {item} = this.props;
    return (
      <div className='card'>
        <img src={item.image} alt="" className='w-100'/>
        <div className='card-footer'>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button className='btn btn-danger'>
                <i className='fa fa-plus'></i>
                Add to cart</button>
        </div>
      </div>
    )
  }
}
