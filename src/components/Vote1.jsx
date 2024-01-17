import React from "react";
function isObj (obj) {
    return obj !== null && /^(object|function)/.test(typeof obj)
}
function shallowEqual (objA, objB) {
    if(!isObj(objA) || !isObj(objB)) return false
    if(objA === objB) return true
    let keysA = Reflect.ownKeys(objA)
    let keysB = Reflect.ownKeys(objB)
    if(keysA.length !== keysB.length) return false
    for(let i = 0 ; i < keysA.length; i++) {
        let key = keysA[i]
        if(!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
            return false
        }
    }
    return true
}
class Vote extends React.Component {
    state = {
        arr: [10, 20, 30]
    }
    render() {
        let { arr } = this.state
        return (
            <>
                <div>
                    {arr.map(item => {
                        return <span
                            style={{
                                display: "inline-block",
                                width: 200, height: 200,
                                marginRight: 10,
                                backgroundColor: 'pink'
                            }}
                            key={item}
                        >
                            {item}
                        </span>
                    })}
                </div>
                <div>
                    <button onClick={() => {
                        let num = 10 * (arr.length + 1)
                        arr.push(num)
                        this.setState({
                            arr
                        })
                    }}>添加</button>
                </div>
            </>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
       let { state, props } = this
       return !shallowEqual(props, nextProps) || !shallowEqual(state, nextState)
    }
}
export default Vote