import { useState } from "react"
import './Vote.less'
import VoteMain from './VoteMain.jsx'
import VoteFooter from './VoteFooter.jsx'
function Vote() {
    let [ supNum, setSupNum ] = useState(0)
    let [ oppNum, setOppNum ] = useState(0)
    const change = (type) => {
        if(type === 'sup') {
            setSupNum(supNum + 1)
        } else if (type === 'opp') {
            setOppNum(oppNum + 1)
        }
    }
    return <div className="vote-box">
        <div className="vote-box">
            <div className="header">
                <h2 className="title">React是很棒的前端框架</h2>
                <span className="num">{supNum + oppNum}</span>
            </div>
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter change={change} />
        </div>
    </div>
}

export default Vote