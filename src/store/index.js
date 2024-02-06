import { createStore } from 'redux'

const initial = {
    supNum: 3,
    oppNum: 1
}

let reducer = function (state = initial, action) {
    state = { ...state }
    switch (action.type) {
        case 'sup':
            state.supNum++
            break;
        case 'opp':
            state.oppNum++
            break;
    }
    return state
}
const store = createStore(reducer)
export default store