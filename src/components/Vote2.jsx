import React from "react";


let Child1 = React.forwardRef(function (props, ref) {
    return (
        <>
            <h3 ref={ref}>Child1</h3>
            <h3 ref={ref}>hhhh</h3>
        </>

    )
})
class Child2 extends React.Component {
    render() {
        return (
            <h3 ref={x => this.tooltip1 = x}>Child2</h3>
        )
    }
}
class Parent extends React.Component {
    tooltip3 = React.createRef()
    render() {
        return (
            <React.StrictMode>
                <h3 ref='tooltip1'>默认提示</h3>
                <h3 ref={(x) => this.tooltip2 = x}>郑重提示</h3>
                <h3 ref={this.tooltip3}>再次提示</h3>
                <Child1 ref={x => this.tooltip4 = x}></Child1>
                <Child2 ref={x => this.tooltip5 = x}></Child2>
            </React.StrictMode>
        )
    }
    componentDidMount() {
        console.log(this.refs.tooltip1)
        console.log(this.tooltip2)
        console.log(this.tooltip3.current)
        console.log(this.tooltip4)
        console.log(this.tooltip5.tooltip1)
    }
}
export default Parent