import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "antd";
import './Demo.less'
export default function Demo() {
    let [num, setNum] = useState(0)
    useEffect(() => {
        if (num === 0) {
            setNum(10)
        }
    })
    useLayoutEffect(() => {
         if (num === 0) {
            setNum(10)
        }
    })
    // useLayoutEffect(() => {
    //     console.log('useLayoutEffect', num)
    // })
    let handleClick = () => {
        setNum(0)
    }
    return <div className="demo" style={{ backgroundColor: num === 0 ? 'red' : 'green' }}>
        <span className="num">{num}</span>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}