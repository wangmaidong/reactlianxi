import { useState, useEffect } from "react";
import { Button } from "antd";
import './Demo.less'
// useEffect不能写在条件判断里面
// function Demo() {
//     let [num , setNum] = useState(0)
//     if(num > 5) {
//         useEffect(()=> {
//             console.log(num)
//         })
//     }
//     let handleClick = () => {
//         setNum(num + 1)
//     }
//     return <div className="demo">
//         <span className="num">{ num }</span>
//         <Button type="primary" onClick={handleClick}>增加</Button>
//     </div>
// }
let queryData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([10, 20 , 30])
        }, 3000)
    })
}
// 这种写法也会报错 经过async修饰后函数必定会返回一个promise,但react规定useEffect传入的回调如果有返回值必须是一个函数
// function Demo() {
//     let [num, setNum] = useState(0)
//     useEffect(async () => {
//         let data = await queryData()
//         console.log('data', data)
//     }, [])
//     let handleClick = () => {
//         setNum(num + 1)
//     }
//     return <div className="demo">
//         <span className="num">{num}</span>
//         <Button type="primary" onClick={handleClick}>增加</Button>
//     </div>
// }
function Demo() {
    let [num, setNum] = useState(0)
    useEffect(() => {
        queryData().then(res => {
            console.log('data1', res)
        })
    }, [])
    // 或者这样写
    useEffect(() => {
        let next = async () => {
            let data = await queryData()
            console.log("data2", data)
        }
        next()
    }, [])
    let handleClick = () => {
        setNum(num + 1)
    }
    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
}

export default Demo