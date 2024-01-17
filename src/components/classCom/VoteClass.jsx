import React, { Component } from "react";
import PropTypes from 'prop-types'
class Vote extends Component {
    state = {
        zcNum: 10,
        fdNum: 5
    }
    static defaultProps = {
        title: '你好啊'
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        let { title } = this.props
        let {zcNum, fdNum} = this.state
        console.log('-----渲染', this)
        return (
            <>
                <div className="header">
                    <h2>{title}</h2>
                </div>
                <div>
                    <span>
                        总人数：
                    </span>
                    { zcNum + fdNum }
                </div>
                <div>
                    <span>支持人数：</span> { zcNum }
                    <span>反对人数：</span> { fdNum }
                </div>
                <div>
                    <button onClick={() => {
                       this.setState({
                        zcNum: ++zcNum
                       })
                    }}>支持</button>
                    <button onClick={() => {
                        this.state.fdNum++
                        this.forceUpdate()
                    }}>反对</button>
                </div>
            </>
        )
    }
    UNSAFE_componentWillMount() {
        console.log('渲染前')
    }
    componentDidMount() {
        console.log('渲染后')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should')
        console.log('nextProps----', nextProps)
        console.log('nextState-----', nextState)
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('willUpdate')
        console.log('nextProps----', nextProps)
        console.log('nextState-----', nextState)
    }
    componentDidUpdate(nextProps, nextState) {
        console.log('didUpdate')
        console.log('nextProps----', nextProps)
        console.log('nextState-----', nextState)
    }
    componentWillReceiveProps(nextProps, nextState) {
        console.log('Receive')
        console.log('nextProps----', nextProps)
        console.log('nextState-----', nextState)
    }
}
export default Vote