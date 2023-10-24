const findUserInDB = (id) => {
    const users = {
        1: {
            id: 1,
            name: 'Sasha',
            friend: 2
        },
        2: {
            id: 2, name: 'Stepa',
            friend: 3
        },
        3: {
            id: 3, name: 'Igor',
            friend: 4
        },
        4: {
            id: 4, name: 'Tventin',
            friend: 1
        },
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users[id]
            if (!user) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

findUserInDB(5).then(console.log).catch(console.warn)