import { Button } from "antd"
import ThemeContext from "../../ThemeContext"
import { useContext } from "react"
import actions from "../../store/actions"
import { connect } from 'react-redux'
function VoteFooter(props) {
    // let { store } = useContext(ThemeContext)
    let { support, oppose } = props
    return <div className="footer">
        <Button type="primary" onClick={support}>支持</Button>
        <Button type="primary" danger onClick={oppose}>反对</Button>
    </div>
}

export default connect(null, dispatch => {
    return {
        support() {
            dispatch(actions.vote.support())
        },
        oppose() {
            dispatch(actions.vote.oppose())
        }
    }
})(VoteFooter) 