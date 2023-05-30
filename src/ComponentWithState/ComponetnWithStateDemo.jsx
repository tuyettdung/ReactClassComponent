import React, { Component } from "react";

export default class ComponetnWithStateDemo extends Component {
    //state là 1 thuộc tính obj có sẵn của react class component dùng để quản lý các dữ liệu thay đổi trên giao diện của component đó.
    state = {
        color: 'blue',
        like: 1,
        size: 25,
        login: false,

    }
//   handleChangeColor = async () => {
//     /*
//       setState là phương thức mặc định của rcc. Dùng để thay đổi giá trị this.state đồng render lại giao diện.
//       + lưu ý: ph.thức setState là ph.thức bất đồng bộ
//     */
//     await this.setState({
//         color:'yellow'
//     });
//     console.log(this.state);

//   };

  handleChangeColor =  () => {
    /*
      setState là phương thức mặc định của rcc. Dùng để thay đổi giá trị this.state đồng render lại giao diện.
      + lưu ý: ph.thức setState là ph.thức bất đồng bộ
    */
    this.setState({
        color:'yellow'
    }, ()=>{
        //Hàm này sẽ tự gọi sau khi thay đổi state và render lại giao diện
        console.log(this.state);
    });
   

  };

  renderLoginUI = () => {
    if(this.state.login){
        return <>
         <p>Hello cybersoft2023</p>
         <button className="btn btn-danger" onClick={()=>{
            this.setState({
                login: false
            })
         }}>Logout</button>
        </>
       
    } 
    return <button className="btn btn-primary" onClick={()=>{
        this.setState({
            login:true
        })
    }}>Login</button>
  }

  render() {
    return (
      <div className="container">
        <h3>Ví dụ 1: Thay đổi màu sắc</h3>
        <p style={{color:this.state.color}}>Lorem ipsum dolor sit amet.</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleChangeColor();
          }}
        >
          Change color
        </button>
        <hr />
        <h3>Ví dụ 2: Tăng giảm số lượng</h3>
        <p>{this.state.like}
            <i className="fa fa-heart text-danger"></i>
        </p>
        <br />
        <i className="fa fa-heart text-danger fs-3" style={{cursor:'pointer'}} onClick={()=>{
            this.setState({
                like: this.state.like + 1
            })
        }}></i>
        <hr />
        <h3>Ví dụ 3: Tăng giảm fontSize </h3>
        <p style={{fontSize:this.state.size}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, nulla.</p>
        <button className="btn btn-dark mx-2" onClick={()=>{
            this.setState({
                size: this.state.size + 5
            })
        }}>+</button>
        <button className="btn btn-dark mx-2" onClick={()=>{
            this.setState({
                size: this.state.size - 5
            })
        }}>-</button>

        <hr />
        <h3>Ví dụ 4: Header login</h3>
        <div className="bg-dark text-end text-light p-3">
            {/* {this.state.login ?<p>Hello cybersoft2023</p> :<button onClick={()=>{
                this.setState({
                    login: true
                })
            }}>Login</button>} */}

            {this.renderLoginUI()}
            
            



        </div>


      </div>
    );
  }
}
