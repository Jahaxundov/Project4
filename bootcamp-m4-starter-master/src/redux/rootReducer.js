import { combineReducers } from "redux";
import movieReducer from "./movie/reducers";

const rootReducer = combineReducers({movieReducer})

export default rootReducer;