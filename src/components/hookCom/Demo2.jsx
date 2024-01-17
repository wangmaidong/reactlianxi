import React, { useState } from "react";
import './Demo.less'
import { Button } from "antd";

function Demo () {
    console.log('render')
    let [ num, setNum ] = useState(0)
    let handleClick = () => {
        setNum(100)
        setNum(200)
        setNum(300)
        setNum(400)
        setNum(500)
        setNum(600)
        setTimeout(() => {
            console.log(num)
        }, 3000);
    }
    return <div className="demo">
        <div className="num">{num}</div>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}
export default Demo