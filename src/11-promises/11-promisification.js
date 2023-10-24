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

// usersAPI.getUser(1).then(user => {
//     console.log(user)
// })

function getNumber() {
    // const promise = Promise.resolve(Math.random())
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)

    })
    return promise
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    read() {
        const data = localStorage.getItem('some-key')
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}

const result = repo.save({name: 'IT-INC'})
if (result) {
    console.log('SAVED')
} else {
    console.warn('NOT SAVED')
}

repo.saveAsync({name: 'IT-INC'})
    .then(() => console.log('SAVED'))
    .catch((error) => console.warn('NOT SAVED: ' + error))

// const run = async () => {
//     await repo.saveAsync({name: 'IT-INC'})
//     console.log('SAVED')
//     const data = await repo.readAsync()
//     console.log(data)
// }
//
// run()
