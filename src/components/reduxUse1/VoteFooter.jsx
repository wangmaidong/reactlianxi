import { Button } from "antd"
import ThemeContext from "../../ThemeContext"
import { useContext } from "react"
import actions from '@/store/actions/index.js'
function VoteFooter() {
    let { store } = useContext(ThemeContext)
    let { voteAction } = actions
    return <div className="footer">
        <Button type="primary" onClick={() => {
            store.dispatch(voteAction.support())
        }}>支持</Button>
        <Button type="primary" danger onClick={() => {
            store.dispatch(voteAction.oppose())
        }}>反对</Button>
    </div>
}

export default VoteFooter