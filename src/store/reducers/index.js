import { combineReducers } from 'redux'
import voteReducer from './voteReducer.js'

const reducer = combineReducers({
    vote: voteReducer
})
export default reducer