import React, { createRef, useEffect, useRef, useState } from "react";
import { Button } from "antd";
import './Demo.less'
let prev1, prev2
function  Demo () {
    let [num, setNum ] = useState(0)
    let [x, setX] = useState(1)
    let box1 = createRef()
    let box2 = useRef()
    useEffect(() => {
        console.log(box1)
        console.log(box2)
        if(!prev1) {
            prev1 = box1
            prev2 = box2
        } else {
            console.log(prev1 == box1)
            console.log(prev2 == box2)
        }
    })
    let handleClick = () => {
        setNum(num + 1)
    }
    return <div className="demo">
        <span className="num" ref={box1}>{ num }</span>
        <span className="num" ref={box2}>{ x }</span>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}
export default Demo