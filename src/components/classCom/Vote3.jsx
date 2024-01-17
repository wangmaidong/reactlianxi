import React from "react";
import { flushSync } from "react-dom";
class Vote extends React.Component {
    state = {
        x: 0
    }
    handleClick1(a, b, ev) {
        // console.log('a-->', a)
        // console.log('b-->', b)
        // console.log('ev-->', ev)
        this.setState({
            x: this.state.x + 2
        })
        flushSync(() => {
            this.setState({
                y: this.state.x + 3
            })
            console.log('1',this.state)
        })
        // console.log('2',this.state)
        // this.setState({
        //     x: this.state.x + 1
        // })
        // console.log('3',this.state)
        // for (let i = 0; i < 20; i++) {
        //     this.setState((preState) => {
        //         console.log(preState)
        //         return {
        //             x: preState.x + 1,
        //             y: '固定的'
        //         }
        //     })
        // }
    }
    handleClick2 = (ev) => {
        console.log(this)
        console.log(ev)
    }
    handleClick3 = (x, env) => {
        console.log(this)
        console.log(x)
        console.log(env)
    }
    render() {
        console.log('render渲染')
        let { x } = this.state
        return (
            <>
                <div>{x}</div>
                <button onClick={this.handleClick1.bind(this, 'first', 'second')}>点击1</button>
                <button onClick={this.handleClick2}>点击2</button>
                <button onClick={this.handleClick3.bind(null, x)}>点击3</button>
            </>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState-->', nextState)
        return true
    }
}
export default Vote