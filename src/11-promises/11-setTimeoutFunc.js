const func = (n = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n + 1)
        }, 1000)
    })
}

func()
    .then(n => {
        console.log(n)
        return func(n)
    })
    .then(n => {
        console.log(n)
        return func(n)
    })
    .then(n => {
        console.log(n)
    })

function wait() {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, 1000)
    })
}

async function run() {
    await wait(1000)
    console.log(7)
    await wait(2000)
    console.log(8)
    await wait(3000)
    console.log(9)
}

run()