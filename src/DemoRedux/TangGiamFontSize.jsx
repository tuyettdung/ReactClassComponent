//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

class TangGiamFontSize extends Component {
  render() {
    const {size,dispatch} = this.props;
    return (
      <div className="container">
        <h3>Ví dụ: Tăng giảm font size</h3>
        <p style={{ fontSize: size }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad
          magni rem nemo quae et minima voluptas facilis hic impedit voluptatem
          enim reprehenderit expedita at provident quibusdam, quia sed aut
          blanditiis veniam incidunt labore! Necessitatibus hic quia eius
          molestiae consequatur.
        </p>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            const action = {
              type: "CHANGE_FONTSIZE",
              payload: -5,
            };
            dispatch(action);
          }}
        >
          -
        </button>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            const action = {
              type: "CHANGE_FONTSIZE",
              payload: +5,
            };
            dispatch(action);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  size: state.fontSizeReducer,
});

export default connect(mapStateToProps)(TangGiamFontSize);
