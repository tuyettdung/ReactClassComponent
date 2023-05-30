import React, { Component } from "react";
import { Connect, connect } from "react-redux";
/**
   B1: Dàn layout
   B2: xác định dữ liệu thay đổi (state) => obj, array,string
   B3: Binding state lên giao diện (kết nối với redux lấy state về và hiển thị lên giao diện)
   B4: Thay đổi state (xử lý thông qua các sự kiện onClick, onChange.blur...) => đưa dữ liệu lên redux xử lý.

 */

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3>Ví dụ 1: Like ảnh</h3>
        <div className="w-25 mt-2 card">
          <img src={this.props.img} alt="" className="w-100" />
          <div className="card-body">
            <button className="btn btn-success" onClick={()=>{
                const action = {
                    type:'changeIMG',
                    payload:'./img/red-car.jpg'
                }
                this.props.dispatch(action);
            }}>Change</button>
            <i
              className="fa fa-heart fs-3 text-danger m-2"
              style={{ cursor: "pointer" }}
              onClick={()=>{
                //gửi dữ liệu lên redux
                const action = {
                    type: 'increaseLike', //Nhãn của action
                    payload: 3 //dữ liệu gửi lên redux
                }
                //Dùng dispatch để đưa dữ liệu lên reducer
                this.props.dispatch(action);
              }}
            ></i>{" "}
            {this.props.like}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
        like: state.likeReducer,
        img: state.imgReducer
})



//dùng thư viện connect để tạo ra nội dung component mới có kết noosiduwx liệu với redux
const ComponentWithRedux = connect(mapStateToProps)(DemoRedux)
export default ComponentWithRedux;