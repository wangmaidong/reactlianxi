import './Vote.less'
import { useContext, useState, useEffect } from 'react'
import ThemeContext from '../../ThemeContext'
import VoteMain from './VoteMain.jsx'
import VoteFooter from './VoteFooter.jsx'
function Vote() {
    let { store } = useContext(ThemeContext)
    console.log(store)
    let { supNum, oppNum } = store.getState()
    let [ num, setNum] = useState(0)
    useEffect(() => {
       let unsubscribe =  store.subscribe(() => {
            setNum(num + 1)
        })
        return unsubscribe
    }, [num])
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

export default Vote