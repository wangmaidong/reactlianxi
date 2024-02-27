import { VOTE_OPP, VOTE_SUP } from '../action-types.js'
import { clone } from '@/assets/utils.js'
let initialState = {
    supNum: 1,
    oppNum: 1
}
const voteReducer = function (state = initialState, action) {
    state = clone(true, state)
    switch (action.type) {
        case VOTE_SUP:
            state.supNum++
            break;
        case VOTE_OPP:
            state.oppNum++
            break;
        default:
            break;
    }
    return state
}

export default voteReducer