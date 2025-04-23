// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr: any = [1, 2, 3, 'Hello', true]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

type BookType = {
    title: string,
    pageCount: number,
    genre: string
}


let book1:BookType = {
    title: 'Kobzar',
    pageCount: 1000,
    genre: 'poem'
}

let book2:BookType = {
    title: 'Medvedenko',
    pageCount: 200,
    genre: 'Biography'
}

let book3:BookType = {
    title: 'Trading',
    pageCount: 300,
    genre: 'Biography'
}


//
// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

interface IBook {
    title: string,
    pageCount: number,
    genre: string
    author: {
        name: string,
        age: number
    }
}

let book4:IBook = {
    title: 'Kobzar',
    pageCount: 1000,
    genre: 'poem',
    author: {
        name: 'Taras Shevchenko',
        age: 35
    }
}

let book5:IBook = {
    title: 'Medvedenko',
    pageCount: 200,
    genre: 'Biography',
    author: {
        name: 'Stanislav Medvedenko',
        age: 35
    }
}

let book6:IBook = {
    title: 'Trading',
    pageCount: 300,
    genre: 'Biography',
    author: {
        name: 'Mark Volberg',
        age: 55
    }
}

//
// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

class User {
    public name: string;
    public username: string;
    public password: string;

    constructor(name: string, username: string, password: string) {
        this.password = password;
        this.username = username;
        this.name = name;
    }
}

// let users: User[] = [
//     {name: 'Oleg', username: 'OL', password: 'dasvsvf24'},
//     {name: 'Olga', username: 'OA', password: 'da2342346324'},
//     {name: 'John', username: 'JO', password: 'da35224'},
//     {name: 'Sahra', username: 'SA', password: 'dasgfnfnf324'},
//     {name: 'Sahara', username: 'SH', password: 'dashhhhh24'},
// ]
//
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису -
// 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//

interface IWeek {
    dayOfWeek: string,
    morningTemperature: number,
    middleDayTemperature: number,
    eveningTemperature: number
}

let week:IWeek[] = [
    {dayOfWeek: 'Monday', morningTemperature: 3, middleDayTemperature: 20, eveningTemperature: 13},
    {dayOfWeek: 'Tuesday', morningTemperature: 2, middleDayTemperature: 21, eveningTemperature: 15},
    {dayOfWeek: 'Wednesday', morningTemperature: 4, middleDayTemperature: 22, eveningTemperature: 16},
    {dayOfWeek: 'Thursday', morningTemperature: 5, middleDayTemperature: 23, eveningTemperature: 13},
    {dayOfWeek: 'Friday', morningTemperature: 3, middleDayTemperature: 24, eveningTemperature: 14},
    {dayOfWeek: 'Saturday', morningTemperature: 1, middleDayTemperature: 22, eveningTemperature: 15},
    {dayOfWeek: 'Sunday', morningTemperature: 4, middleDayTemperature: 20, eveningTemperature: 13}
]

console.log(week);

// Логічні розгалуження:
//
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

let x: number = +prompt('Введіть довільне число')!;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time:number = 0;
if (time <= 15 && time >= 1) {
    console.log('Перша чверть години')
} else if (time >= 16 && time <= 30) {
    console.log('Друга чверть години')
} else if (time >= 31 && time <= 45) {
    console.log('Третя чверть години')
} else if (time >= 46 && time <= 59) {
    console.log('Четверта чверть години')
} else {
    console.log('Не коректне значення');
}


//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

let day:number = 17;
if (day > 0 && day <= 10) {
    console.log('Перша декада')
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада')
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада')
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
switch (+prompt('Введіть номер дня тижня')!) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('Не вірно введено число');
}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1:number = +prompt('Введіть перше число')!;
let num2:number = +prompt('Введіть друге число')!;

let maxNum:number = num1;
if (num2 >= maxNum) {
    maxNum = num2
}

console.log(maxNum);


//
// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//

let xx: string | number | null | undefined = 'string';

if (!xx) {
    xx = 'default';
}

console.log(xx);

console.log(xx);

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

type coursesType = {
    title: string,
    monthDuration: number
}

let courseArray: coursesType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (courseArray[0].monthDuration > 5) {
    console.log("Super")
}
if (courseArray[1].monthDuration > 5) {
    console.log("Super")
}
if (courseArray[2].monthDuration > 5) {
    console.log("Super")
}
if (courseArray[3].monthDuration > 5) {
    console.log("Super")
}
if (courseArray[4].monthDuration > 5) {
    console.log("Super")
}
if (courseArray[5].monthDuration > 5) {
    console.log("Super")
}