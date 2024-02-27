import _ from "@/assets/utils.js"
function createStore(reducer) {
    let state, listeners = []
    function getState() {
        return _.clone(true, state)
    }
    function subscribe(listener) {
        if (!_.isFunction(listener)) {
            throw new Error('Expected the listener to be a function.')
        }
        if (listeners.some(item => item === listener)) return
        listeners.push(listener)
        return () => {
            let index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }
    function dispatch(action) {
        if (!_.isPlainObject(action)) {
            throw new Error('Actions must be plain objects.')
        }
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.')
        }
        try {
            state = reducer(state, action)
        } catch (error) {
            
        }
        listeners.forEach(listener => {
            if(typeof listener === 'function') {
                listener()
            }
        })
        return action
    }
    const randomString = function randomString() {
        return Math.random().toString(36).substring(7).split('').join('.')
    }
    dispatch({
        type: `@@redux/INIT${randomString()}`
    })
    return {
        getState,
        subscribe,
        dispatch
    }
}