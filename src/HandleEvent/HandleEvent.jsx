import React, { Component } from 'react'

export default class HandleEvent extends Component {

handleChangeColor = (e) => {
e.target.className = "btn btn-danger"
}
thayDoiHoTen = (hoTenMoi) => {
    document.querySelector("#ho-ten-sv").innerHTML = hoTenMoi;


}

  render() {
    return (
      <div className='container'>
        <button className='btn btn-success' onClick={(e)=>{
            e.target.className = 'btn btn-dark'
        }}>Click me!</button>

        <button className='btn btn-primary' onClick={this.handleChangeColor}>Change color</button>

         <h3 id='title'>title</h3>
        <input className='my-2 form-control w-25' id='text' onInput={(e)=>{
            let {value} = e.target;
            document.querySelector("#title").innerHTML = value;
        }}/>
        <hr />
        <h3>Họ tên: <span id='ho-ten-sv'></span></h3>
        <div className='form-group'>
            <p>Nhập vào họ tên</p>
            <input type="text" id='txt-ho-ten' className='form-control w-25' />
            <br />
            <button className='my-2 btn btn-dark' onClick={(e)=>{
                let {value} = document.querySelector("#txt-ho-ten");
                this.thayDoiHoTen(value);
            }}>Submit</button>
        </div>


      </div>
    )
  }
}
