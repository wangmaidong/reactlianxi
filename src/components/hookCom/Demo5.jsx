import { useState } from "react";
import { Button } from "antd";
import './Demo.less'
// function Demo(props) {
//     // 如果初始值需要依靠传进来的数据进行计算得出
//     // 这种方式会每次都计算
//     let { x , y} = props
//     let numInitVal = Math.floor( x + Math.random() * (y - x + 1))
//     console.log(numInitVal)
//     let [num , setNum ] = useState()
//     let handleClick = () => {
//         setNum(num + 1)
//     }
//     return <div className="demo">
//         <span className="num">{ num }</span>
//         <Button type="primary" onClick={handleClick}>增加</Button>
//     </div>
// }
function Demo(props) {
    let [num, setNum] = useState(() => {
        let { x, y } = props
        let numInitVal = Math.floor(x + Math.random() * (y - x + 1))
        console.log(numInitVal)
        return numInitVal
    })
    let handleClick = () => {
        setNum(num + 1)
    }
    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}
export default Demo
// useState大致实现
// var _state
// function  useState(initVal) {
//     if(typeof _state === 'undefined') {
//         if(typeof initVal === 'function') {
//             _state = initVal()
//         } else {
//             _state = initVal
//         }
//     }
//     let setState = (val) => {
//         if(Object.is(_state, val)) return
//         if(typeof val === 'function') {
//             _state = val(_state)
//         } else {
//             _state = val
//         }
//     }
//     return [_state, setState]
// }