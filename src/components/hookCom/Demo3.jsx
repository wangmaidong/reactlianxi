import { useState } from "react";
import { flushSync } from "react-dom";
import { Button } from "antd";
import './Demo.less'
function Demo () {
    console.log("render")
    let [ x , setX ] = useState(0)
    let [ y , setY ] = useState(0)
    let [ z , setZ ] = useState(0)
    let handleClick = () => {
        // flushSync(() => {
            setX(10)
            setY(20)
        // })
        setZ(30)
    }
    return <div className="demo">
        <span className="num">{ x }</span>
        <span className="num">{ y }</span>
        <span className="num">{ z }</span>
        <Button type="primary" onClick={ handleClick }>增加</Button>
    </div>
}
export default Demo