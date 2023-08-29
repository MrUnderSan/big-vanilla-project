type UsersType = {
    [key: string]: {id: number, name: string}
}
let users: UsersType

beforeEach( () => {
    users  = {
        '101': { id: 101, name: 'Dimych'},
        '34562': { id: 34562, name: 'Natasha'},
        '21': { id: 21, name: 'Valera'},
        '1': { id: 1, name: 'Katya'}
    }
})

test("should update corresponding user", () => {
    users['1'].name = 'Ekateryna'

    expect(users['1'].name).toBe('Ekateryna')
    expect(users['1']).toEqual({ id: 1, name: 'Ekateryna'})
})

test("should delete corresponding user", () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})