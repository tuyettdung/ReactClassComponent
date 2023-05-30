import React, { Component } from 'react'

export default class  extends Component {
  render() {
    //this.props: là thuộc tính có sẵn: dùng để nhận dữ liệu từ component cha truyền vào
    /** Props ko thể gán lại dữ liệu */
    const {hoTen,hinhAnh,tuoi} = this.props;
    return (
      <div className='card'>
        <img src={hinhAnh} alt="" />
        <div className='card-body'>
            <h3>Name: {hoTen} </h3>
            <p>Age: {tuoi}</p>
        </div>
      </div>
      
    )
  }
}
