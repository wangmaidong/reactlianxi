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
        // setTimeout(() => {
        //     console.log(num)
        // }, 3000);
    }
    return <div className="demo">
        <div className="num">{num}</div>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}

// 函数组件静态组件
// function Demo() {
//     let num = 0
//     let handleClick = () => {
//         num = num + 1
//         console.log("num--->", num)
//     }
//     return <div className="demo">
//         <div className="num">{num}</div>
//         <Button type="primary" onClick={handleClick}>增加</Button>
//     </div>
// }
// 类组件  动态组件
// class Demo extends React.Component {
//     state = {
//         num: 0
//     }
//     handleClick = () => {
//         let { num } = this.state
//         this.setState({
//             num: num + 1
//         })
//     }
//     render() {
//         let { num } = this.state
//         return <div className="demo">
//             <div className="num">{num }</div>
//             <Button type="primary" onClick={ this.handleClick }>增加</Button>
//         </div>
//     }
// }
export default Demo