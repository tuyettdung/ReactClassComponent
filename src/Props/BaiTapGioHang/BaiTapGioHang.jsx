import React, { Component } from "react";
import SanPham from "./SanPham";
import GioHang from "./GioHang";

const dataProduct = [
  { id: 1, name: "Red car", image: "./img/red-car.jpg", price: 1000 },
  { id: 2, name: "Silver car", image: "./img/silver-car.jpg", price: 1000 },
  { id: 3, name: "Black car", image: "./img/black-car.jpg", price: 1000 },
  { id: 4, name: "Steel car", image: "./img/steel-car.jpg", price: 1000 },
];
export default class BaiTapGioHang extends Component {
  state = {
    cart: [
      {
        id: 1,
        name: "red-car",
        image: "./img/red-car.jpg",
        price: 1000,
        quantity: 1,
      },
    ],
  };
  renderProduct = () => {
    return dataProduct.map((car, index) => {
      return (
        <div className="col-3" key={index}>
          <SanPham car={car} addToCart={this.addItem} />
        </div>
      );
    });
  };

  addItem = (itemClick) => {
    // console.log(itemClick);

    let itemCard = { ...itemClick, quantity: 1 };

    //kiểm tra giỏ hàng có sp đó hay chưa nếu có thì lấy ra và tăng số lượng, ngc lại add vào giỏ hàng

    let gioHang = this.state.cart;
    let spGioHang = gioHang.find((item) => item.id === itemCard.id);
    if (spGioHang) {
      spGioHang.quantity += 1;
    } else {
      gioHang.push(itemCard);
    }

    this.setState({
      cart: gioHang,
    });
  };

  deleteItem = (idClick) => {
    // console.log(idClick)
    let indexDel = this.state.cart.findIndex((item) => item.id === idClick);
    if (indexDel !== -1) {
      this.state.cart.splice(indexDel, 1);
    }
    this.setState({
      cart: this.state.cart,
    });
  };

  tangGiamSoLuong = (spClick, sl) => {
    let gioHang = [...this.state.cart];
    let spTK = gioHang.find((sp) => sp.id === spClick);
    if (spTK) {
      spTK.quantity += sl;

      if (spTK.quantity < 1) {
        if (window.confirm("bạn có muốn xóa không")) {
          this.deleteItem(spClick);
          return;
        } else {
          spTK.quantity -= sl;
        }
      }
    }

    this.setState({
      cart: gioHang,
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Product List</h3>
        <div className="row">{this.renderProduct()}</div>
        <h3>Cart ({this.state.cart.length})</h3>
        <GioHang
          cart={this.state.cart}
          deleteItem={this.deleteItem}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
      </div>
    );
  }
}
