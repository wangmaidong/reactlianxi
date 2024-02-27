import * as TYPES from '../action-types.js'
import _ from '@/assets/utils.js'

let initialState = {
    supNum: 10,
    oppNum: 5
}

export default function voteReducer(state = initialState, action) {
    state = _.clone(true, state)
    let { type, payload = 1 } = action
    switch (type) {
        case TYPES.VOTE_SUP:
            state.supNum++
            break;
        case TYPES.VOTE_OPP:
            state.oppNum++
            break;
        default:
            break;
    }
    return state
}
