import { Button } from "antd"
import ThemeContext from "../../ThemeContext"
import { useContext } from "react"
import actions from '@/store/actions/index.js'
import { connect } from "react-redux"
function VoteFooter(props) {
    console.log(props)
    console.log(actions)
    let {support,  oppose} = props
    return <div className="footer">
        <Button type="primary" onClick={support}>支持</Button>
        <Button type="primary" danger onClick={oppose}>反对</Button>
    </div>
}

export default connect(null, actions.voteAction)(VoteFooter) 