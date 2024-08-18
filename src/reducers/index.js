import { combineReducers } from "redux";
import * as types from "../actiontype";

const initialState = {
    loadintro: true,
    menuOpen:false
};

const  reducer = (state = initialState, action) =>{
  switch (action.type) {
    case types.SET_SHOWNINTRO:
      return {loadintro:!state.loadintro};
    case types.SET_MENUOPEN:
        return {menuOpen:!state.menuOpen};
    default:
     return state;
  }
};

const conquer = combineReducers({
    reducer
  })
  
export default conquer;
