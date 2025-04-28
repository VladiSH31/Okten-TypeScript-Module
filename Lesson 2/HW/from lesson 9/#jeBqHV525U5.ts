//#jeBqHV525U5
// – Є масив
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.

type courseType = {
    title: string,
    monthDuration: number}

let coursesAndDurationArray: courseType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courses: HTMLDivElement = document.createElement('div');
courses.classList.add('courses');

for (const item of coursesAndDurationArray) {
    let course: HTMLDivElement = document.createElement('div');
    course.classList.add('course');

    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.innerText = item.title;
    course.appendChild(h2);

    let p: HTMLParagraphElement = document.createElement('p');
    p.innerText = item.monthDuration + '';
    course.appendChild(p)
    courses.appendChild(course)
}

document.body.appendChild(courses);