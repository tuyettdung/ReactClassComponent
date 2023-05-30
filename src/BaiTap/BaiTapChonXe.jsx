import React, { Component } from "react";

const arrCar = [
  {
    id: 1,
    name: "Red car",
    color: "red",
    price: 1000,
    img: "./img/red-car.jpg",
  },
  {
    id: 2,
    name: "Silver car",
    color: "silver",
    price: 2000,
    img: "./img/silver-car.jpg",
  },
  {
    id: 3,
    name: "Black car",
    color: "black",
    price: 3000,
    img: "./img/black-car.jpg",
  },
  {
    id: 4,
    name: "Steel car",
    color: "#EEE",
    price: 4000,
    img: "./img/steel-car.jpg",
  },
];
/** Yêu cầu 1: Xây dựng giao diện render các objcar thành card item bootstrap */
export default class BaiTapChonXe extends Component {
    state = {
       cardDetail: {
        id: 1,
    name: "Red car",
    color: "red",
    price: 1000,
    img: "./img/red-car.jpg",
       }
    }

    
  renderCardCar = () => {
    return arrCar.map((car,index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img src={car.img} alt="" className="w-100" />
            <div className="card-footer">
              <p>{car.name}</p>
              <p>{car.price}</p>
              <button className="btn btn-success" onClick={()=>{
                this.setState({
                    cardDetail:car
                })
              }} >Buy</button>
            </div>
          </div>
        </div>
      );
    });
  };



  render() {
    return (
      <div className="container">
        <div className="my-2 row">{this.renderCardCar()}</div>
        <h3>Car detail</h3>
        <div className="d-flex">
          <div className="card w-25">
            <img src={this.state.cardDetail.img} alt="" className="w-100" />
            <div className="card-footer">
              <p>{this.state.cardDetail.name}</p>
              <p>{this.state.cardDetail.price}</p>
            </div>
          </div>
          <div className="mx-5">
            <p>Car name: {this.state.cardDetail.name} </p>
            <p>Price: {this.state.cardDetail.price}</p>
            <p>Color:{this.state.cardDetail.color}</p>
          </div>
        </div>
      </div>
    );
  }
}
