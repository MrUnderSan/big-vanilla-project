const usersAPI = {
    _users: {
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
    },
    getUser(id) {
        return Promise.resolve(this._users[id])
    }
}

async function run(){
    const user = await usersAPI.getUser(1)
    console.log(user)
    const friend1 = await usersAPI.getUser(user.friend)
    console.log(friend1)
    const friend2 = await usersAPI.getUser(friend1.friend)
    console.log(friend2)
}

run()

// usersAPI.getUser(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => {
//         console.log(user)
//         return user.friend
//     })
//     .then(friend => {
//         console.log(friend)
//         return usersAPI.getUser(friend)
//     })
//     .then(user => {
//         console.log(user)
//         return user.name
//     })
//     .then(name => {
//         console.log(name)
//     })