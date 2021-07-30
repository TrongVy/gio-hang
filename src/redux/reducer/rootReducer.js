import { combineReducers } from "redux";
import { gioHangReducer } from "./GoHangReducer";

//store tong 

export const rootReducer = combineReducers({
    //noi se chua cac reducer  (cac store con)
    gioHangReducer :gioHangReducer
})