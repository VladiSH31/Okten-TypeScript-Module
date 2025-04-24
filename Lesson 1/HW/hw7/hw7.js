"use strict";
// #iz6emEsP2BA
// – є масив
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
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let mapCourses = coursesDurationArray.map((value, index) => ({ ...value, id: index + 1 }));
console.log(mapCourses);
function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const item in obj) {
            let key = item;
            if (typeof obj[key] === 'function') {
                let copyFunctions = obj[key].bind({});
                functions.push({ copyFunctions, key });
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const function1 of functions) {
            cloneObj[function1.key] = function1.copyFunctions;
        }
        return cloneObj;
    }
    throw new Error('Error');
}
let cloneObj = cloner({ id: 99, name: 'Dan', age: 33, greeting: (str) => 'Hello', info: (str) => 'Its me' });
console.log(cloneObj);
