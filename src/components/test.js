function wait (time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
async function  bar () {
    await wait(5 * 1000)
    console.log('bar')
}
async function foo () {
    await bar()
    console.log('foo')
}
async function a () {
    await foo()
    console.log('a')
}
a()