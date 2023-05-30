//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

class FormRegister extends Component {
  handleChange = (e) => {
    const {value,id} = e.target;
    const action = {
        type:'HANDLE_CHANGE_FORM',
        payload:{
            id:id,
            value:value
        }
    }
    this.props.dispatch(action);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const values = this.props.userRegister;
    const action = {
        type:'HANDLE_SUBMIT',
        payload: values
    }
    this.props.dispatch(action);

  };
  render() {
    const {email,name,password} = this.props.userRegister;
    // console.log(userRegister);
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <div className="form-group">
          <p>email</p>
          <input  className="form-control" id="email" value={email} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <p>name</p>
          <input  className="form-control" id="name" value={name} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <p>password</p>
          <input  className="form-control" id="password" value={password} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <button className="btn btn-dark mt-3" type="submit">Register</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
    userRegister: state.userRegisterReducer,
  
});

export default connect(mapStateToProps)(FormRegister);
