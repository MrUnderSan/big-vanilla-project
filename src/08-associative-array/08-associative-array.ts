// let user = {
//     name: 'Dimych',
//     age: 12,
//     address: {
//         city: {
//             title: 'Minsk'
//         }
//     }
// }
//
// let title1 = user.address.city.title
// let title2 = user['address']['city']['title']
//
// user = {
//     'name': 'Dimych',
//     'age': 12,
//     'address': {
//         'city': {
//             'title': 'Minsk'
//         }
//     }
// }
//
// let users = ['Dimych', 'Natasha', 'Valera', 'Katya']
//
// users.map(e=>e.toUpperCase())
// users['map'](e=>e.toUpperCase())
//
// let usersObject = {
//     '0': 'Dimych',
//     '1': 'Natasha',
//     '2': 'Valera',
//     '3': 'Katya'
// }
// let user0 = usersObject['0']
//
// let usersObjKeys = Object.keys(usersObject)
// let usersObjValues = Object.values(usersObject)

// ------------



export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

export const usersArray = [
    { id: 101, name: 'Dimych'},
    { id: 34562, name: 'Natasha'},
    { id: 21, name: 'Valera'},
    { id: 1, name: 'Katya'}
]
// usersArray.find(u => u.id === 1)
// let usersArrayCopy = [...userArray.filter(), user]
// let userArray = userArray.filter(u => u.id !== user.id)
// сложность O(n)



type UsersType = {
    [key: string]: {id: number, name: string}
}
const users: UsersType = {
    '101': { id: 101, name: 'Dimych'},
    '34562': { id: 34562, name: 'Natasha'},
    '21': { id: 21, name: 'Valera'},
    '1': { id: 1, name: 'Katya'}
}

const newUser = {id: 100500, name: 'Igor'}
users[newUser.id] = newUser
delete users[newUser.id]
users[newUser.id].name = 'Vitya'
// сложность O(1)