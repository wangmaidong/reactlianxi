import React from "react";
import './Vote.less'
import VoteMain from "./VoteMain.jsx";
import VoteFooter from "./VoteFooter.jsx";
class Vote extends React.Component {
    state = {
        supNum: 0,
        oppNum: 0
    }
    change = (type) => {
        let { supNum, oppNum} = this.state
        if(type === 'sup') {
            this.setState({
                supNum: supNum + 1
            })
        } else if ( type === 'opp') {
            this.setState({
                oppNum: oppNum + 1
            })
        }
    }
    render() {
        let { supNum, oppNum } = this.state
        return <div className="vote-box">
            <div className="header">
                <h2 className="title">React是很棒的前端框架</h2>
                <span className="num">{supNum + oppNum}</span>
            </div>
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter change={this.change} />
        </div>
    }
}

export default Vote