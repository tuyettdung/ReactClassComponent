//rcredux
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {addItemAction} from "../redux/reducers/cartReducer"

 class Home extends Component {
  state = {
    arrProduct: [],
  };

  getProductApi = async () => {
    let res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    this.setState({
      arrProduct:res.data.content,
    });
  };

  componentDidMount() {
    this.getProductApi();
  }

  render() {

    return (
      <div className="container">
        <h3>Home page</h3>
        <div className="row">
          {this.state.arrProduct.map((prod,index)=>{
            return <div className="col-3 mt-2" key={index}>
            <div className="card">
              <img src={prod.image} alt="" />
              <div className="card-body">
                <h6>{prod.name}</h6>
                <p>{prod.price}</p>
                <button className="btn btn-dark" onClick={()=>{
                  //gửi dữ liệu lên redux
                  // const action = {
                  //   type:'cartReducer/addItemAction',
                  //   payload: prod
                  // }
                  const action = addItemAction(prod);
                  this.props.dispatch(action);
                }}>
                  Add to cart
                  <i className="fa fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
 

});

export default connect(mapStateToProps)(Home);
