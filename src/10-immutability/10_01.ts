export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}

export type CompanyType = {
    id: number,
    title: string
};
export type UserWithCompaniesType = UserWithBooksType & {
    companies: CompanyType[]
}

export function makeHaircut(u: UserType, power: number) {

    return {...u, hair: u.hair / power}

    // const copy = {
    //     ...u,
    //     hair: u.hair / power
    // }
    // copy.hair = u.hair / power
    // return copy

}

export function moveUser(u: UserWithLaptopType, city: string) {

    return {...u, address: {...u.address, city: city}}

}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

export function addNewBooksToUser(u: UserWithBooksType, b: string[]) {
    return {...u, books: [...u.books, ...b]}
}

export function updateBook(u: UserWithBooksType, ob: string, nb: string) {
    return {...u, books: u.books.map(b => b === ob ? nb : b)}
}

export function removeBook(u: UserWithBooksType, rb: string) {
    return {...u, books: u.books.filter(b => b !== rb)}
}

export function addCompany(u: UserWithCompaniesType, c: string) {
    return {...u, companies: [...u.companies, {id: u.companies.length + 1, title: c}]}
}

export function updateCompanyTitle(u: UserWithCompaniesType, id: number, uc: string) {
    return {
        ...u, companies: u.companies.map(c => c.id === id ? {...c, title: uc} : c)
    }
}

export function updateCompany(
    companies: { [key: string]: CompanyType[] },
    userName: string,
    companyId: number,
    newTitle: string) {

    let companyCopy = { ...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)


    return companyCopy
}