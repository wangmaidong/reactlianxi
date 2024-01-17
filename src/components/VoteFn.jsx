function Vote (props) {
    let zcNum = 10
    let fdNum = 5
    return (
        <div style={{ width: 400, borderWidth: 1, borderStyle: 'solid', borderColor: 'red' }}>
            <div>
                总人数：{ zcNum + fdNum }人
            </div>
            <div>
                支持人数：{ zcNum }人
            </div>
            <div>
                反对人数：{ fdNum }人
            </div>
            <div>
                <button onClick={() => { zcNum++ ; console.log(zcNum)}}>支持</button>
                <button onClick={() => { fdNum++ }}>反对</button>
            </div>
        </div>
    )
}
export default Vote