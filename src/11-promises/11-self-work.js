function learn(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!time) {
                reject('you did not understand anything')
            } else {
                resolve(time)
            }
        }, 1000)
    })
}

learn(1)
    .then(time => {
        console.log(`Прошел ${time} час`)
        return learn(time + 1)
    })
    .then(time => {
        console.log(`Прошло ${time} часа`)
        return learn(time + 1)
    })
    .then(time => {
        console.log(`Прошло целых ${time} часа`)
    })
    .catch(console.warn)
    .finally(() => {
        console.log('Молодец, ты победил это видео! Но думаешь на этом все? :)')
    })