import {
  DAT_CUOC,
  PLAY_GAME,
  RAN_DOM_COMPUTER,
} from "../constants/gameOanTuTiConstants";

export const actDatCuoc = (loai) => ({
  type: DAT_CUOC,
  payload: loai,
});

export const actComputerRanDom = () => ({
  type: RAN_DOM_COMPUTER,
});

export const actPlayGame = () => ({
  type: PLAY_GAME,
});
