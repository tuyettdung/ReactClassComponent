import React, { Component } from 'react'
import PhoneCard from './PhoneCard';


const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ];
export default class PhoneDetail extends Component {
    state = {
        phone:{ "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    }
viewDetail = (proClick) => {
    this.setState({
        phone:proClick
    })
}
  render() {
    return (
      <div className='container'>
        <h3 className='text-center m-3'>Danh sách sản phẩm</h3>
        <div className='row'>
            {dataPhone.map((item,index)=>{
                return <div className='col-4' key={index}>
                <PhoneCard item={item} viewDetail={this.viewDetail} />
            </div>
            })}
        </div>
        
        <div className='row'>
            <div className='col-4'>
                <h4 className='mt-3 pt-2 text-center'>Iphone 6</h4>
                <img src={this.state.phone.hinhAnh} alt="..." height={360}/>
            </div>
            <div className='col-8'>
                <div className='mt-5 table'>
                    <thead>
                    <h4>Thông số kỹ thuật</h4>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Màn hình</td>
                        <td>{this.state.phone.manHinh}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành</td>
                        <td>{this.state.phone.heDieuHanh}</td>
                    </tr>
                    <tr>
                        <td>Camera trước</td>
                        <td>{this.state.phone.cameraTruoc}</td>
                    </tr>
                    <tr>
                        <td>Camera sau</td>
                        <td>{this.state.phone.cameraSau}</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>{this.state.phone.ram}</td>
                    </tr>
                    <tr>
                        <td>ROM</td>
                        <td>{this.state.phone.rom}</td>
                    </tr>
                    </tbody>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
