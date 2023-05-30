import React, { Component } from 'react'
//Cách 1: import vào file
// import '../assets/styles/style.css';
//Cách 2: import css module
import cssOb from './style.module.css';
//Cách 3: nhúng trực tiếp qua style của thẻ


export default class ComponentWithStyle extends Component {
  render() {
    return (
      <div className='container'>
        <p className='color-dark-blue'>Lorem ipsum dolor sit amet consectetur.</p>

        <p className={`${cssOb['color-red']} fs-3`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid!
        </p>

        <p style={{fontSize:9, color:'yellow',margin:10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    )
  }
}
