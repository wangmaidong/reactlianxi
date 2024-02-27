import { VOTE_OPP, VOTE_SUP } from "../action-types";
const voteAction = {
    support() {
        return {
            type: VOTE_SUP
        }
    },
    oppose() {
        return {
            type: VOTE_OPP
        }
    }
}
export default voteAction
