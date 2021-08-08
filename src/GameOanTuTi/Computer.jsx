import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    const { Computer } = this.props;
    return (
      <div className="Player">
        <div className="Think">
          <img
            src={Computer.hinhAnh}
            width={50}
            className="mt-4"
            style={{ transform: "rotate(270deg)" }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img src="./imgGame/playerComputer.png" width={200} height={200} />
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  Computer: state.GameOanTuTiReducer.Computer,
});

export default connect(mapStateToProp)(Computer);
