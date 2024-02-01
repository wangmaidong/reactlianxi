import { useMemo } from "react";
import Proptypes from 'prop-types'
function VoteMain(props) {
    let { supNum, oppNum } = props
    let ratio = useMemo(() => {
        let result = (supNum + oppNum) == 0 ? 0 : (supNum / (supNum + oppNum))
        return (result * 100).toFixed(2) + '%'
    }, [supNum, oppNum])
    return <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{oppNum}人</p>
        <p>支持比率：{ratio}</p>
    </div>;
}
VoteMain.defaultProps = {
    supNum: 0,
    oppNum: 0
}
VoteMain.propTypes = {
    supNum: Proptypes.number,
    oppNum: Proptypes.number
}
export default VoteMain