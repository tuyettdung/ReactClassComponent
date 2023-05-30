import React, { Component, createRef } from "react";
import FormProduct from "./FormProduct";

export default class ProductManagement extends Component {
  constructor(props) {
    super(props);
    //hàm tạo ra đối tượng dom
    this.childRef = createRef();
    this.state = {
      arrProduct: [
        {
          id: "11",
          name: "iphone",
          price: 1000,
          image: "./img/applephone.jpg",
          description: "abcdefg",
          type: "phone",
        },
      ],
      // productEdit:{id:'',name:'',price:'',image:'',description:'',type:''}
    };
  }

  addItem = (prodClick) => {
    let newArrProduct = [...this.state.arrProduct];
    newArrProduct.push({ ...prodClick });
    this.setState({
      arrProduct: newArrProduct,
    });
  };

  deleteItem = (prodClick) => {
    let arrDel = [...this.state.arrProduct];
    let newArray = arrDel.filter((pro) => pro.id !== prodClick);
    this.setState({
      arrProduct: newArray,
    });
  };

  editItem = (proClick) => {
    // this.setState({
    //     productEdit:proClick
    // })
    this.childRef.current.setState({
      values: proClick,
    });
  };

  updateItem = (proEdit) => {
    proEdit = { ...proEdit };
    let proInArray = this.state.arrProduct.find((pro) => pro.id == proEdit.id);
    if (proInArray) {
      for (let key in proInArray) {
        proInArray[key] = proEdit[key];
      }
      this.setState({
        arrProduct: this.state.arrProduct,
      });
    }
  };

  renderTable = () => {
    return this.state.arrProduct.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>Product 1</td>
          <td>
            <img src={prod.image} alt="" width={60} />
          </td>
          <td>{prod.price}</td>
          <td>{prod.description}</td>
          <td>{prod.type}</td>
          <td>
            <button
              className="mx-2 btn btn-danger"
              onClick={() => {
                this.deleteItem(prod.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.editItem(prod);
              }}
            >
              <i className="fa fa-edit"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Product Management</h3>
        <FormProduct
          ref={this.childRef}
          addItem={this.addItem}
          productEdit={this.state.productEdit}
          updateItem={this.updateItem}
        />
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>description</th>
              <th>type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
