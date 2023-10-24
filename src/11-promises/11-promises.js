import axios from 'axios';

console.log('first func')

const promise1 = axios.get('https://google.com')
const promise2 = axios.get('https://bing.com')
promise1
    .then((data) => {
        console.log(data.config.url)
    })
    .catch((err) => {
        console.warn(err)
    })
    .finally(() => {
        console.log('finally')
    })

// правильный короткий синтаксис
// axios.get('https://google.com')
//     .then((data) => {
//         console.log(data.config.url)
//     })

promise2
    .then((data) => {
        console.log(data.config.url)
    })

// class Promise
// СТАТИЧЕСКИЙ МЕТОД только у класса (нет у экземпляров объектов созданных с помощью класса): all
// Promise.all()

const otherPromise = Promise.all([promise1, promise2])

otherPromise.then((result) => {
    const [result1, result2] = result
    console.log('finish 1:')
    console.log('result1: ', result1.config.url)
    console.log('result2: ', result2.config.url)
})

// allSettled - срабатывает при смене состояния pending на fulfilled или reject и возвращает объект со status и value или reason соответственно
const otherPromise2 = Promise.allSettled([promise1, promise2])
otherPromise2.then((result) => {
    const [result1, result2] = result
    console.log('finish 2:')
    console.log('result1: ', result1.status)
    console.log('result2: ', result2.status)
})


console.log('last func')