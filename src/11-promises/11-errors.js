const findUserInDB = (id) => {
    const users = {
        1: {
            id: 1,
            name: 'Sasha',
            friend: 5
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

// findUserInDB(1)
//     .then(user => {
//         console.log(user.name)
//         return user.friend
//     })
//     .then(friendID => {
//         console.log(friendID)
//         return findUserInDB(friendID)
//     })
//     .catch(error => {
//         console.log('Sorry try later')
//         return {name: 'Friend bot', friend: 3}
//     })
//     .then(friend => {
//         console.log(friend.name)
//         return friend.friend
//     })
//     .then(friendID => {
//         console.log(friendID)
//         return findUserInDB(friendID)
//     })
//     .then(friend => {
//         console.log(friend.name)
//     })
//     .catch(error => {
//         console.warn(error)
//     })

async function run() {
    try {
        const user = await findUserInDB(1)
        console.log(user)
        let friend1
        try {
            friend1 = await findUserInDB(user.friend)
            console.log(friend1)
        } catch (err) {
            friend1 = {name: 'Friend bot', friend: 3}
            console.log(friend1)
        }

        const friend2 = await findUserInDB(friend1.friend)
        console.log(friend2)
    } catch (error) {
        alert(error)
    }
}

run()