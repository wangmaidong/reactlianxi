import { VOTE_OPP, VOTE_SUP } from "../action-types";
function wait (time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
const voteAction = {
     support() {
        return async dispatch => {
            await wait(3* 1000)
            return dispatch({
                type: VOTE_SUP
            })
        }
    },
    async oppose() {
        await wait(2* 1000)
        return {
            type: VOTE_OPP
        }
    }
}
export default voteAction
