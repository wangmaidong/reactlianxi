import './Vote.less'
import ThemeContext from './ThemeContext'
import VoteMain from './VoteMain.jsx'
import VoteFooter from './VoteFooter.jsx'
import { useState } from 'react'
function Vote() {
    let [ supNum , setSupNum ] = useState(1)
    let [ oppNum, setOppNum ] = useState(1)
    let change = (type) => {
        if(type === 'sup') {
            setSupNum(supNum + 1)
        } else if (type === 'opp') {
            setOppNum(oppNum + 1)
        }
    }
    return <ThemeContext.Provider
    value = {{
        supNum,
        oppNum,
        change
    }}
    >
        <div className="vote-box">
            <div className="header">
                <h2 className="title">React是很棒的前端框架</h2>
                <span className="num">{supNum + oppNum}</span>
            </div>
            <VoteMain />
            <VoteFooter />
        </div>
    </ThemeContext.Provider>
}
export default Vote