import {
  DAT_CUOC,
  PLAY_GAME,
  RAN_DOM_COMPUTER,
} from "../constants/gameOanTuTiConstants";

const initialState = {
  mangPlayer: [
    { loai: "keo", hinhAnh: "./imgGame/keo.png", datCuoc: true },
    { loai: "bua", hinhAnh: "./imgGame/bua.png", datCuoc: false },
    { loai: "bao", hinhAnh: "./imgGame/bao.png", datCuoc: false },
  ],
  ketQua: "Im iron man, i love you 3000!!",
  soBanThang: 0,
  soBanChoi: 0,
  Computer: { loai: "keo", hinhAnh: "./imgGame/keo.png" },
};

const GameOanTuTiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DAT_CUOC:
      {
        let mangPlayerUpdate = [];
        mangPlayerUpdate = state.mangPlayer.map((item, index) => {
          if (item.loai === payload) {
            return { ...item, datCuoc: true };
          } else {
            return { ...item, datCuoc: false };
          }
        });
        return { ...state, mangPlayer: mangPlayerUpdate };
      }
      break;
    case RAN_DOM_COMPUTER: {
      let indexRanDom = Math.floor(Math.random() * 3);
      state.Computer = state.mangPlayer[indexRanDom];
      return { ...state };
    }

    case PLAY_GAME: {
      state.soBanChoi += 1;
      let player = state.mangPlayer.find((item) => item.datCuoc === true);
      let computer = state.Computer;

      switch (player.loai) {
        case "keo":
          {
            if (computer.loai === "keo") {
              state.ketQua = "Hòa nhau!!";
            } else if (computer.loai === "bua") {
              state.ketQua = "Bạn thua rồi!!";
            } else {
              state.ketQua = "Im iron man, i love you 3000!!";
              state.soBanThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (computer.loai === "keo") {
              state.ketQua = "Im iron man, i love you 3000!!";
              state.soBanThang += 1;
            } else if (computer.loai === "bua") {
              state.ketQua = "Hòa nhau!!";
            } else {
              state.ketQua = "Bạn thua rồi!!";
            }
          }
          break;
        case "bao":
          {
            if (computer.loai === "keo") {
              state.ketQua = "Bạn thua rồi!!";
            } else if (computer.loai === "bua") {
              state.ketQua = "Im iron man, i love you 3000!!";
              state.soBanThang += 1;
            } else {
              state.ketQua = "Hòa nhau!!";
            }
          }
          break;
        default:
          break;
      }
      return { ...state };
    }
    default:
      return state;
  }
};

export default GameOanTuTiReducer;
