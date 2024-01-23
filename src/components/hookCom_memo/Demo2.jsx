import React, { useEffect, useCallback, useState, useMemo } from "react";
import { Button } from "antd";
import './Demo.less'
let pre
// class Child extends React.PureComponent {

//     render() {
//         console.log(this)
//         console.log('render')
//         return <div>
//             我是孩子
//         </div>
//     }
// }
let Child = React.memo(function (props) {
    console.log(props)
    return <div>
    我是孩子
</div>
}) 
function Vote() {
    let [ supNum, setSupNum ] = useState(10)
    let [ oppNum, setOppNum ] = useState(0)
    let ratio = useMemo(() => {
        let res = (supNum / (supNum + oppNum)).toFixed(2) * 100  + '%'
        return res
    }, [supNum, oppNum])
    let [x , setX ] = useState(0)
    let childFn = useCallback(() => {
        console.log('childFn')
    }, []) 
    if(!pre) {
        pre = childFn
    } else {
        console.log('pre === childFn', pre === childFn)
    }
    return <div className="vote-box">
        <div className="main">
            <p>支持人数：{supNum}人</p>
            <p>反对人数：{oppNum}人</p>
            <p>支持比率：{ratio}</p>
            <p>x:{x}</p>
        </div>
        <div className="footer">
            <Button type="primary" onClick={() => setSupNum(supNum + 1)}>支持</Button>
            <Button type="primary" danger onClick={() => setOppNum(oppNum + 1)}>反对</Button>
            <Button onClick={() => setX(x + 1)}>干点别的事</Button>
        </div>
        <Child fn={childFn}></Child>
    </div>;
}

export default Vote