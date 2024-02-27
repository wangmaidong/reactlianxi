import * as TYPES from '../action-types.js'
const voteAction = {
    support(payload) {
        return {
            type: TYPES.VOTE_SUP,
        }
    },
    oppose() {
        return {
            type: TYPES.VOTE_OPP
        }
    }
}

export default voteAction