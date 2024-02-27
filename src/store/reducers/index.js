import { combineReducers } from "redux";
import voteReducer from "./voteReducer";

const reducer = combineReducers({
    vote: voteReducer
})

export default reducer