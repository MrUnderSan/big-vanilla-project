type UserType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(user: UserType) {
    user.age++
}

test('big test', () => {

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {title: 'Minsk'}
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)

})

test('array test', () => {

    var users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    var admin = users

    admin.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('value type test', () => {

    let usersCount = 100

    let adminCount = usersCount

    adminCount++

    expect(usersCount).toBe(100)

    expect(adminCount).toBe(101)

})

test('reference type test', () => {

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addr
    }

    user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')

})

test('reference type array test', () => {

    const address = {
        title: 'Minsk'
    }

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})