"use strict";
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str11 = ' dirty string   ';
let trimStr = str11.trim();
console.log(trimStr);
//
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str22 = 'Ревуть воли як ясла повні';
function stringToArray(str) {
    return str.split(' ');
}
let arrFromStr = stringToArray(str22);
console.log(Array.isArray(arrFromStr));
console.log(arrFromStr);
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNums = nums.map(value => value + '');
console.log(typeof stringNums[0], stringNums);
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums1 = [11, 21, 3];
function sortNums(array, direction) {
    array.sort((a, b) => {
        if (direction === 'ascending') {
            return a - b;
        }
        if (direction === 'descending') {
            return b - a;
        }
        else {
            return 0;
        }
    });
    return array;
}
console.log(sortNums(nums1, 'ascending'));
let coursesAndDurationArray1 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
//  -- відсортувати його за спаданням за monthDuration
let sortedCourses = coursesAndDurationArray1.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sortedCourses);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtredDuration = coursesAndDurationArray1.filter(value => value.monthDuration >= 5);
console.log(filtredDuration);
let mapedCourses = coursesAndDurationArray1.map((value, index) => {
    let newCourse = {
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    };
    return newCourse;
});
console.log(mapedCourses);
let cards = [
    { value: 6, cardSuit: 'spade', color: 'black' },
    { value: 7, cardSuit: 'spade', color: 'black' },
    { value: 8, cardSuit: 'spade', color: 'black' },
    { value: 9, cardSuit: 'spade', color: 'black' },
    { value: 10, cardSuit: 'spade', color: 'black' },
    { value: 6, cardSuit: 'clubs', color: 'black' },
    { value: 7, cardSuit: 'clubs', color: 'black' },
    { value: 8, cardSuit: 'clubs', color: 'black' },
    { value: 9, cardSuit: 'clubs', color: 'black' },
    { value: 10, cardSuit: 'clubs', color: 'black' },
    { value: 6, cardSuit: 'heart', color: 'red' },
    { value: 7, cardSuit: 'heart', color: 'red' },
    { value: 8, cardSuit: 'heart', color: 'red' },
    { value: 9, cardSuit: 'heart', color: 'red' },
    { value: 10, cardSuit: 'heart', color: 'red' },
    { value: 6, cardSuit: 'diamond', color: 'red' },
    { value: 7, cardSuit: 'diamond', color: 'red' },
    { value: 8, cardSuit: 'diamond', color: 'red' },
    { value: 9, cardSuit: 'diamond', color: 'red' },
    { value: 10, cardSuit: 'diamond', color: 'red' },
];
let aceSpade = cards.find((card) => {
    return card.value === 10 && card.cardSuit === 'spade';
});
console.log(aceSpade);
let sixCards = cards.filter(card => card.value === 6);
console.log(sixCards);
let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);
let diamondCards = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamondCards);
let clubsCards = cards.filter((card) => {
    return card.cardSuit === 'clubs' && card.value >= 9;
});
console.log(clubsCards);
let reducedCards = cards.reduce((accumulator, currentValue) => {
    if (currentValue.cardSuit === 'spade') {
        accumulator.spades.push(currentValue);
    }
    if (currentValue.cardSuit === 'diamond') {
        accumulator.diamonds.push(currentValue);
    }
    if (currentValue.cardSuit === 'heart') {
        accumulator.hearts.push(currentValue);
    }
    if (currentValue.cardSuit === 'clubs') {
        accumulator.clubs.push(currentValue);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reducedCards);
let coursesArray1 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let filtredSass = coursesArray.filter((course) => {
    for (const modulesElement of course.modules) {
        if (modulesElement === 'sass') {
            return course;
        }
        if (modulesElement === 'docker') {
            return course;
        }
        else {
            console.log(new Error('Not found'));
        }
    }
});
console.log(filtredSass);
