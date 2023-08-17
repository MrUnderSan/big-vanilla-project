test('should take old men older then 90', () => {
    const ages = [12, 20, 22, 1, 100, 90, 12];

    // упрощаем:

    // const predicate = (age: number) => {
    //     return age > 90;
    // }

    // const predicate =  (age: number) => age > 90;
    // const oldAges = ages.filter(predicate);

    // const oldAges = ages.filter((age: number) => age > 90);

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)


})

test('should take courses cheaper then 160', () => {

    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 400},
        {title: 'react', price: 500},
    ]

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(1);
    expect(cheapCourses[0].title).toBe('css')


})

test('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Cheese', isDone: true},
        {id: 4, title: 'Sausage', isDone: false},
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('bread');
    expect(completedTasks[1].title).toBe('Cheese');

})