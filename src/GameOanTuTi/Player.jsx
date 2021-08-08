import React, { Component } from "react";
import { connect } from "react-redux";
import { actDatCuoc } from "../store/action/gameOanTuTiAction";

class Player extends Component {
  render() {
    const { mangPlayer, datCuoc } = this.props;
    return (
      <div className="Player">
        <div className="Think">
          <img
            src={mangPlayer.find((item) => item.datCuoc === true).hinhAnh}
            width={50}
            className="mt-4"
            style={{ transform: "rotate(270deg)" }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img src="./imgGame/player.png" width={200} height={200} />
        <div className="row">
          {mangPlayer.map((item, index) => {
            let boxShadow = {};
            if (item.datCuoc) {
              boxShadow = {
                boxShadow: "0px 0px 17px 2px rgba(247, 231, 6, 0.45)",
              };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  className="btnPlayer"
                  style={boxShadow}
                  onClick={() => {
                    datCuoc(item.loai);
                  }}
                >
                  <img
                    src={item.hinhAnh}
                    width={40}
                    height={40}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  mangPlayer: state.GameOanTuTiReducer.mangPlayer,
});

const mapDispatchToProp = (dispatch) => ({
  datCuoc: (loai) => {
    dispatch(actDatCuoc(loai));
  },
});

export default connect(mapStateToProp, mapDispatchToProp)(Player);
