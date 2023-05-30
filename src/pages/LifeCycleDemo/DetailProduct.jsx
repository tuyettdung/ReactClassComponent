import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetailProduct extends Component {
    state = {
        productDetail: {

        },
        id:0
    }
  render() {
    return (
      <div className='container'>
        <h3>Detail Product</h3>
        <div className='row mt-2'>
            <div className='col-4'>
                <img src={this.state.productDetail.image} className='w-100' alt="" />
            </div>
            <div className='col-8'>
                <h3>{this.state.productDetail.name}</h3>
                <p>{this.state.productDetail.description}</p>
            </div>

        </div>
        <h3 className='mt-2'>related product</h3>
        <div className='row'>
            {this.state.productDetail.relatedProducts?.map((prod,index)=>{
                return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={prod.image} />
                    <div className='card-body'>
                    <NavLink onClick={()=>{
                        this.getProductDetail(prod.id)
                    }} to={`/detail/${prod.id}`}  className="btn btn-dark" >View detail</NavLink>
                        
                    </div>
                </div>
                
            </div>
            })}
            
            
        </div>
      </div>
    )
  }

  componentDidMount(){
     //Vừa load lên trang thì sẽ lấy tham số call api => setState bởi api content
     const url = window.location.href.split('/');
     let id = url[url.length - 1];
     //Từ id sẽ call api
     this.getProductDetail(id);

  }

  getProductDetail = async(id) => {
    const res = await axios({
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: 'GET'
    })
    this.setState({
        productDetail:res.data.content,
        id:id
    })


  }

componentDidUpdate(PreProps,prevState){
 
}

}
