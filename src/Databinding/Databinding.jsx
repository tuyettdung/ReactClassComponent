import React, { Component } from 'react'

export default class Databinding extends Component {

    lopHoc = 'Bootcamp 45';
    renderCard = () => {
        return <div className='card w-25'>
            <img src="http://i.pravatar.cc?u=9" alt="" />
            <div className='card-body'>
                Lớp: {this.lopHoc}
            </div>

        </div>
        //để binding 1 hàm thì giá trị trả về sẽ là number, string. boolen, jsx
    }

  render() {
    const hoTen = 'Nguyễn Văn A';
    const linkImg = "http://picsum.photos/200/200";
    
    return (
      <div className='container'>
        <h3>Họ tên: {hoTen}</h3>
        <h3>Lớp học: {this.lopHoc} </h3>
        <img src={linkImg} alt="..."  className='w-25 mt-2'/>
        <input type="text" className='form-control w-25 mt-2' value={hoTen} />

        {this.renderCard()}
        

      </div>
    )
  }
}
