import { useState } from "react"
import { Button } from "antd" 
import './Demo.less'
function Demo () {
    console.log('render')
    let [ num , setNum ] = useState(0)
    let handlClick = () => {
        for (let i = 0; i <= 20; i++) {
            setNum((prev) => {
                console.log(prev)
                return prev 
            })
        }
    }
    return <div className="demo">
        <span className="num">{ num }</span>
        <Button type="primary" onClick={ handlClick }>增加</Button>
    </div>
}
export default Demo