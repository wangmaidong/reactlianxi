import './Vote.less'
import { useContext, useState, useEffect } from 'react'
import ThemeContext from '../../ThemeContext'
import VoteMain from './VoteMain.jsx'
import VoteFooter from './VoteFooter.jsx'
import { connect } from 'react-redux'
function Vote(props) {
    // let { store } = useContext(ThemeContext)
    // let { supNum, oppNum } = store.getState().vote
    // let [ num, setNum ] = useState(0)
    // useEffect(() => {
    //     let unsubscribe = store.subscribe(() => {
    //         setNum(num + 1)
    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [num])
    let { supNum, oppNum } = props
    return <div >
        <div className="vote-box">
            <div className="header">
                <h2 className="title">React是很棒的前端框架</h2>
                <span className="num">{supNum + oppNum}</span>
            </div>
            <VoteMain />
            <VoteFooter />
        </div>
    </div>
}

export default connect(state => {
    return state.vote
})(Vote)