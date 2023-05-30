import React, { Component,PureComponent } from 'react'
//pure component tuowng tự component tuy nhiên ko có lifecycle shouldComponentUpdate (pure sẽ tự xử lý this và new props ngầm).sự s/s this và new props chỉ là ss nguyên thủy như boolen,number,string,null,undefined.
//Lưu ý khi sử dụng pureComponent thì tại các sự kiện thay đổi refernce value sate thì cần clone obj đó ra 

export default class Child extends PureComponent {

    constructor(props){
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }
    static getDerivedStateFromProps(newState,newProps){
        console.log('getDerivedStateFromProps child')
        return null;
    }

    // shouldComponentUpdate(newProps,newState){
    //     console.log('newProps',newProps);
    //     console.log('this props',this.props);
    //     if(newProps.number !== this.props.number){
    //         return true; // cần component render lại vì props đã thay đổi
    //     }
    //     return false;
    //   }

    // componentWillReceiveProps(newProps){
    //     //hàm chỉ chạy khi new props thay đổi
    //     console.log('componentWillReceiveProps')
    // }
  render() {
    console.log('render child')
    return (
      <div className='bg-dark text-white fs-3'>
        Child component: {this.props.number.value}
      </div>
    )
  }
  componentDidMount(){
    console.log('componentDidMount child')
  }
  componentDidUpdate(){
    //tuowng tự componentDidMount tuy nhiên sẽ chjay sau mỗi lần state props thay đổi thường dùng để set các page detail. Lưu ý khi setState trong hàm này phải có if
  }
  componentWillUnmount(){
    console.log('componentWillUnmount child')
  }
}
