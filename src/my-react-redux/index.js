import { useLayoutEffect } from "react"
import { useMemo, createContext , useContext} from "react"
import { bindActionCreators } from "redux"
let ThemeContext = createContext()
function Provider(props) {
    let { store, children } = props
    return <ThemeContext.Provider value={{
        store
    }}>
        { children }
    </ThemeContext.Provider>
}

function connect(mapStateToProps, mapDispatchToProps) {
    if(!mapStateToProps) {
        mapStateToProps = function mapStateToProps() {
            return {}
        }
    }
    if(!mapDispatchToProps) {
        mapDispatchToProps = function mapDispatchToProps () {
            return {}
        }
    }
    return function HOC(Component) {
        return function Proxy(props) {
            let { store } = useContext(ThemeContext),
            {getStatusClassNames, dispatch, subscribe, getState } = store
            let state = getState()
            state = useMemo(() => mapStateToProps(state), [state])
            let dispatchToProps = useMemo(() => {
                if(typeof mapDispatchToProps === 'function') {
                    return mapDispatchToProps(dispatch)
                }
                return bindActionCreators(mapDispatchToProps, dispatch)
            }, [dispatch])
            const [, forceUpdate] = useSate(0)
            useLayoutEffect(() => {
                return subscribe(() => forceUpdate(+ new Date()))
            }, [subscribe])
            return <Component
            { ...props }
            { ...state}
            { ...dispatchToProps}
            ></Component>
        }
    }
}

export {
    Provider,
    connect
}