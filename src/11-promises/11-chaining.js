import axios from 'axios';

// chaining

const promise2 = axios.get('https://google.com')

// каждый then создает новый promise
const promise2_2 = promise2.then((data) => {
    return data.config.url
})

promise2_2.then(url => console.log(url))

// реальное написание
axios.get('https://bing.com')
    .then(res => res.config.url)
    .then(url => console.log(url))

const getUrlFromGoogle = () => {
    // const pr = axios.get('https://google.com')
    // const pr2 = pr.then(res => res.config)
    // return pr2

    return axios.get('https://google.com')
        .then(res => res.config)
        .then(config => config.url)
}

getUrlFromGoogle()
    .then(url => console.log(url))

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

usersAPI.getUser(1)
    .then(user => {
        console.log(user)
        return user
    })
    .then(user => {
        console.log(user)
        return user.friend
    })
    .then(friend => {
        console.log(friend)
        return usersAPI.getUser(friend)
    })
    .then(user => {
        console.log(user)
        return user.name
    })
    .then(name => {
        console.log(name)
    })