//rcc
import React, { Component } from "react";

import BTHomePage from "./Components/BTHomePage/BTHomePage";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import ComponentWithStyle from "./ComponentWithStyle/ComponentWithStyle";
//css
import "./styles/style.css";
import ComponetnWithStateDemo from "./ComponentWithState/ComponetnWithStateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTap from "./BaiTap/BaiTap";
import DemoProps from "./Props/DemoProps/DemoProps";
import ListProduct from "./Props/ShoeShop/ListProduct";
import { data } from "./data/dataProduct";
import PhoneDetail from "./Props/PhoneDetail/PhoneDetail";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";

//Cấu hình router
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Header from "./Components/Header/Header";
import HomeTemplate from "./templates/HomeTemplate";
import ProductManagement from "./pages/DemoForm/ProductManagement";
import LifeCycleDemo from "./pages/LifeCycleDemo/LifeCycleDemo";
import DetailProduct from "./pages/LifeCycleDemo/DetailProduct";
import DemoRedux from "./DemoRedux/DemoRedux";
import TangGiamFontSize from "./DemoRedux/TangGiamFontSize";
import DemoRegister from "./DemoRedux/DemoRegister/DemoRegister";
import Cart from "./pages/Cart";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="detail" >
            <Route path=":id" element={<DetailProduct />}></Route>
          </Route>
          <Route path = "form" element={<ProductManagement />}></Route>
          <Route path = "lifecycle" element={<LifeCycleDemo />}></Route>
          <Route path = "demo-redux1" element={<DemoRedux />}></Route>
          <Route path = "demo-redux2" element={<TangGiamFontSize />}></Route>
          <Route path = "demo-redux-form" element={<DemoRegister />}></Route>
          <Route path = "cart" element={<Cart />}></Route>



          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Navigate to={'/'} />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
