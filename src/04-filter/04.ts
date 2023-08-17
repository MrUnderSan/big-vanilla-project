const ages = [12,20,22,1,100,90,12]

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 200},
    {title: 'js', price: 400},
    {title: 'react', price: 500},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [];