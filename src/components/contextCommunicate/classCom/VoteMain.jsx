import React from "react";
import PropTypes from 'prop-types'
import ThemeContext from "./ThemeContext";
class VoteMain extends React.Component {
    static defaultProps = {
        supNum: 0,
        oppNum: 0
    }
    static propTypes = {
        supNum: PropTypes.number,
        oppNum: PropTypes.number
    }
    static contextType = ThemeContext
    render() {
        console.log('VoteMain-->', this)
        let { supNum, oppNum } = this.context
        let result = (supNum + oppNum) == 0  ? 0 : (supNum / (supNum + oppNum))
        let ratio = (result * 100).toFixed(2) + '%'
        return <div className="main">
            <p>支持人数：{supNum}人</p>
            <p>反对人数：{oppNum}人</p>
            <p>支持比率：{ratio}</p>
        </div>;
    }
}

export default VoteMain