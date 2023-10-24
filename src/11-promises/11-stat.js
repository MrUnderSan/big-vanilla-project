// stat method resolve/reject

const resolvedPromise = Promise.resolve(100)
console.log(resolvedPromise)

const rejectedPromise = Promise.reject({message: 'Some error'})
console.log(rejectedPromise)

resolvedPromise
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.warn(err)
    })

rejectedPromise
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.warn(err)
    })

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'},{name: 'N'}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject([{message: 'Incorrect login or password'}])
        } else {
            return Promise.resolve([{name: 'Dima', id: 13, avatarUrl: ''}])
        }
    }
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI.login('123', '132')
.then(data => {
    // makeRedirect
})
.catch(error => {
    //show error
})