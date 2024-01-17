import React, { createRef, useState } from "react";
import { Button } from "antd";
import './Demo.less'
let Demo = React.forwardRef(function Demo(props, ref) {
    let [num ,setNum] = useState(0)
    let handleClick = () => {
        setNum(num + 1)
    }
    return <div className="demo">
        <span className="num" ref={ref}>{num}</span>
        <Button type="primary" onClick={handleClick}>增加</Button>
    </div>
})
class FCom extends React.Component {
    state = {
        num: 0
    }
    handleClick = () => {
        this.setState({
            num: 10
        })
    }
    boxDom = null
    render() {
        // let { num } = this.state
        // return <div className="demo">
        //     <span className="num" ref={x => this.boxDom = x}>{num}</span>
        //     <Button type="primary" onClick={this.handleClick}>增加</Button>
        // </div>
        return <Demo ref={ x => this.boxDom = x}></Demo>
    }
    componentDidMount() {
        console.log(this.boxDom)
    }
}
export default FCom