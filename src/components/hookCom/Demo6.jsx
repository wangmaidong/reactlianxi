import { useEffect, useState } from "react";
import { Button } from "antd";
import './Demo.less'
function Demo() {
    console.log('render')
    let [num, setNum] = useState(0)
    let [x, setX] = useState(1)
    let handleClick = () => {
        setNum(num + 1)
    }
    useEffect(() => {
        console.log("@1", num)
        const dom = document.querySelector('.demo')
        console.log(dom)
    })
    useEffect(() => {
        console.log("@2", num)
    }, [])
    useEffect(() => {
        console.log("@3", num)
    }, [num, x])
    useEffect(() => {
        return () => {
            console.log("@4", num)
        }
    })
    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}
export default Demo