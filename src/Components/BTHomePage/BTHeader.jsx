import React, { Component } from 'react'

export default class BTHeader extends Component {
  render() {
    //Tuyệt đối ko nên xét width cho component bởi vì component này cps thể gắn vào các component có nhiều size khác nhau
    return (
      <div className='bg-dark text-white text-center display-4 p-5'>
        Header component 
      </div>
    )
  }
}
