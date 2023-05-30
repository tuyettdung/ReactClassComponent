import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { cart, deleteItem, tangGiamSoLuong } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((car, index) => {
            return (
              <tr key={index}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>
                  <img src={car.image} width={80} alt="" />
                </td>
                <td>{car.price}</td>
                <td>
                  <button className="btn btn-primary mx-2" onClick={() => {
                        tangGiamSoLuong(car.id,-1);
                    }}>-</button>
                  {car.quantity}
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        tangGiamSoLuong(car.id,1);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>2000$</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteItem(car.id);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
