import {
    addCompany,
    addNewBooksToUser,
    makeHaircut,
    moveUser, removeBook, updateBook, updateCompany, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from './10_01';


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const cutUser = makeHaircut(user, 2)

    expect(user.hair).toBe(32)
    expect(cutUser.hair).toBe(16)
    expect(cutUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})

test('update laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')

})

test('add new book to user', () => {
    let user: UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'rect']
    }

    const upgradedUser = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[4]).toBe('ts')
    expect(upgradedUser.books[5]).toBe('rest api')
    expect(user.books.length).toBe(4)

})
test('update js to ts', () => {
    let user: UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'rect']
    }

    const upgradedUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')

})

test('remove js book', () => {
    let user: UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'rect']
    }

    const upgradedUser = removeBook(user, 'js')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[2]).toBe('rect')
    expect(user.books[2]).toBe('js')

})

test('add new company', () => {
    let user: UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'rect'],
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'it-incubator'},
        ]
    }

    const upgradedUser = addCompany(user, 'Google')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).toBe(upgradedUser.books)
    expect(user.companies.length).toBe(2)
    expect(upgradedUser.companies.length).toBe(3)
    expect(upgradedUser.companies[2].title).toBe('Google')
    expect(upgradedUser.companies[2].id).toBe(3)

})

test('update company title', () => {
    let user: UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'rect'],
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'it-incubator'},
        ]
    }

    const upgradedUser = updateCompanyTitle(user, 1, 'Epam')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).toBe(upgradedUser.books)
    expect(user.companies[0].title).toBe('Епам')
    expect(upgradedUser.companies[0].title).toBe('Epam')

})

test('update company', () => {

    let companies = {
        'Dimych': [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'it-incubator'},
        ],
        'Artem': [
            {id: 1, title: 'it-incubator'},
        ]
    }

    const copy = updateCompany(companies, 'Dimych', 1, 'Epam')

    expect(companies.Artem).toBe(copy.Artem)
    expect(companies.Dimych).not.toBe(copy.Dimych)
    expect(companies.Dimych[0].title).toBe('Епам')
    expect(copy.Dimych[0].title).toBe('Epam')


})