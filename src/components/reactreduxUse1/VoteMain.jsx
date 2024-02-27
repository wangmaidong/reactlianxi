import React from "react";
import ThemeContext from "../../ThemeContext";
import { connect } from "react-redux";
class VoteMain extends React.Component {
    render() {
        let { supNum , oppNum } = this.props
        let result = (supNum + oppNum) == 0 ? 0 : (supNum / (supNum + oppNum))
        let ratio = (result * 100).toFixed(2) + '%'
        return <div className="main">
            <p>支持人数：{supNum}人</p>
            <p>反对人数：{oppNum}人</p>
            <p>支持比率：{ratio}</p>
        </div>;
    }
}

export default connect(state => {
    return state.vote
})(VoteMain) 