function combineReducers (reducers) {
    const reducerKeys = Reflect.ownKeys(reducers)
    return function reducer(state = {}, action) {
        const nextState = {}
        for(let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i]
            reducer = reducers[key]
            const nextStateForKey = reducer(state[key], action);
            nextState[key] = nextStateForKey
        }
        return nextState
    }
}