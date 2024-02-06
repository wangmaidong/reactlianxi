import { Button } from "antd"
import ThemeContext from "../../ThemeContext"
import { useContext } from "react"
function VoteFooter() {
    let { store } = useContext(ThemeContext)
    return <div className="footer">
        <Button type="primary" onClick={() => {
            store.dispatch({
                type: 'sup'
            })
        }}>支持</Button>
        <Button type="primary" danger onClick={() => {
            store.dispatch({
                type: 'opp'
            })
        }}>反对</Button>
    </div>
}

export default VoteFooter