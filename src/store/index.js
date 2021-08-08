import { createStore, combineReducers } from "redux";
import GameOanTuTiReducer from "./reducer/gameOanTuTiReducer";

const rootReducer = combineReducers({
  GameOanTuTiReducer,
});

const store = createStore(rootReducer);

export default store;
