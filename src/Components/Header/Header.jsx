//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    console.log(' props', this.props);
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">CyberSoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}} aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/about" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}>About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/login" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/form" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}>Form</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/lifecycle" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}>Lifecycle</NavLink>
      </li>

      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</NavLink>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="demo-redux1">Demo Redux 1</NavLink>
          <NavLink className="dropdown-item" to="demo-redux2">Demo Redux 2</NavLink>
          <NavLink className="dropdown-item" to="demo-redux-form">Demo Register</NavLink>
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <NavLink to="/cart">
        <i className='fa fa-cart-plus text-white fs-5'>({this.tinhTongTien()})</i>
      </NavLink>
    </form>
  </div>
</nav>

    )
  }

  tinhTongTien = () => {
    let tongTien = 0; 
    for (let item of this.props.cart){
      tongTien += item.quantity * item.price
    }
    return tongTien.toLocaleString();
  }
}

const mapStateToProps = (state) => ({
  cart:state.cartReducer.gioHang
})



export default connect(mapStateToProps)(Header)