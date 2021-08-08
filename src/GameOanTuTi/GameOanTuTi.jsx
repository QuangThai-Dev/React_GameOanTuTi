import React, { Component } from "react";
import Computer from "./Computer";
import "./OanTuTi.css";
import Player from "./Player";
import ThongTinGame from "./ThongTinGame";
import { connect } from "react-redux";
import {
  actComputerRanDom,
  actPlayGame,
} from "../store/action/gameOanTuTiAction";

class GameOanTuTi extends Component {
  render() {
    const { playGame } = this.props;
    return (
      <div className="gameOanTuTi">
        <div className="row mt-4 text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <ThongTinGame />
            <button
              className="btn btn-success"
              onClick={() => {
                playGame();
              }}
            >
              {" "}
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => ({
  playGame: () => {
    let count = 0;
    let ranDom = setInterval(() => {
      dispatch(actComputerRanDom());
      count++;
      if (count > 20) {
        clearInterval(ranDom);
        dispatch(actPlayGame());
      }
    });
  },
});

export default connect(null, mapDispatchToProp)(GameOanTuTi);
