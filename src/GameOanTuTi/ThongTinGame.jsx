import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  render() {
    const { ketQua, soBanThang, soBanChoi } = this.props;
    return (
      <div>
        <div
          className="text-warning"
          style={{ fontSize: "50px", height: "150px" }}
        >
          {ketQua}
        </div>
        <div className=" text-success mt-3" style={{ fontSize: 40 }}>
          Số bàn thắng: <span className="text-warning">{soBanThang}</span>
        </div>
        <div className=" text-success" style={{ fontSize: 40 }}>
          Số bàn chơi: <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  ketQua: state.GameOanTuTiReducer.ketQua,
  soBanThang: state.GameOanTuTiReducer.soBanThang,
  soBanChoi: state.GameOanTuTiReducer.soBanChoi,
});

export default connect(mapStateToProp)(ThongTinGame);
