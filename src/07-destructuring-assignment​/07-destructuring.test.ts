import {ManType} from './07-destructuring';

let props: ManType
beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Haharyna'
            }
        }
    }
})

test('', () => {

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
})

test('', () => {

    // const l1 = props.lessons[0]
    // const l2 = props.lessons[1]

    const [l1, ...restLessons] = props.lessons

    const [,,l3] = props.lessons

    expect(l1.title).toBe('1')
    expect(restLessons[0].title).toBe('2')
    expect(l3.title).toBe('3')

    expect(restLessons[1]).toStrictEqual({title: '3', name: 'react'})

})