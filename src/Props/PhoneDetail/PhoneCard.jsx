import React, { Component } from 'react'

export default class PhoneCard extends Component {
  render() {
    let {item,viewDetail} = this.props;
    return (
        <div className='card'>
        <img src={item.hinhAnh} alt="..." height={360} />
        <div className='card-body'>
            <h4>{item.tenSP}</h4>
            <button className='btn btn-success' onClick={()=>{
                viewDetail(item)
            }}>Xem chi tiết</button>
        </div>
    </div>
    )
  }
}
