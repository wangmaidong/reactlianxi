import Proptypes from 'prop-types'
import { Button } from 'antd'
function VoteFooter (props) {
    let { change } = props
    return <div className="footer">
            <Button type="primary" onClick={change.bind(null, 'sup')}>支持</Button>
            <Button type="primary" danger onClick={change.bind(null, 'opp')}>反对</Button>
        </div>
}
export default VoteFooter