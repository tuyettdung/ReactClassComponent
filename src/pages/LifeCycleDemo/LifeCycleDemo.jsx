import React, { Component } from "react";
import Child from "./Child";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:{
        value:1
      },
      userLogin: "",
      arrProduct: [],
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(currentState, newProps) {
    console.log("getDerivedStateFromProps");
    if (localStorage.getItem("userLogin")) {
      return {
        ...currentState,
        userLogin: localStorage.getItem("userLogin"),
      };
    }
    return null;
  }

  shouldComponentUpdate(newProps,newState){
    console.log('shouldComponentUpdate');
    return true
  }

  getAllProductApi = async () => {
    //gọi api:
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    console.log(res.data.content);
    //sau khi có giá trị api thì ta đưa vào state
    this.setState({
        arrProduct:res.data.content
    })
  };
  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Lifecycle Component</h3>
        <p>{this.state.number.value}</p>
        <button className="btn btn-success" onClick={()=>{
            let newNumber = {...this.state.number};
            newNumber.value += 1;
            this.setState({
                number:newNumber
            })
        }}>
            <i className="fa fa-heart"></i>Like
        </button>
        <Child number={this.state.number} />
        <div id="content">userLogin: {this.state.userLogin}</div>
        <hr />
        <h3>Gọi api từ backend</h3>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.getAllProductApi();
          }}
        >
          Get all product
        </button>
        <div className="row">
          {this.state.arrProduct.map((prod,index)=>{
            return <div className="col-4" key={index}>
            <div className="card">
              <img src={prod.image} alt="" />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <NavLink  to={`/detail/${prod.id}`}  className="btn btn-dark" >View detail</NavLink>
                
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    );
  }

  timeout = {}
  componentDidMount() {
    //thường dùng để gọi api đưa vao state
    console.log("componentDidMount");
    // this.getAllProductApi();
    this.timeout = setInterval(()=>{
        console.log('thông tin mới');
        //setState
    }, 3000)
  }
  componentWillUnmount(){
    //chạy trc khi component mất khỏi giao diện
    console.log('componentWillUnmount')
    //clear những hàm chạy ngầm
    clearInterval(this.timeout)
  }
}
