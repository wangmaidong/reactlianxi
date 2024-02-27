import { createStore } from "redux";
import { clone } from '@/assets/utils.js'
let initialState = {
    supNum: 1,
    oppNum: 1
}

const reducer = function reducer(state = initialState, action) {
    state = clone(true, state)
    switch (action.type) {
        case 'sup':
            state.supNum++;
            break;
        case 'opp':
            state.oppNum++;
            break;
        default:
            break;
    }
    return state
}

 const store = createStore(reducer)
 export default store