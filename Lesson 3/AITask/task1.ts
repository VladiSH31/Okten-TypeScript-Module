// 1. Типізувати функцію для обчислення середнього значення
// Напишіть функцію, яка приймає масив чисел і повертає їх середнє значення. Типізуйте функцію.
// let arrNum: number[] = [12, 1, 6, 9, 45]
// function calculateAverage(numbers: number[]): number {
//     // Ваш код тут
//     let result = 0;
//     numbers.forEach(value => {
//         result += value;
//     });
//     return result / numbers.length;
// }
//
// console.log(calculateAverage(arrNum));

//2. Типізувати об'єкт із налаштуваннями
// Створіть інтерфейс для об'єкта налаштувань, який має такі поля:
//
// theme (рядок, наприклад, "dark" або "light"),
// fontSize (число),
// showNotifications (булеве значення).
// Напишіть функцію, яка приймає цей об'єкт і виводить його в консоль.
//
// typescript
// Copy Code
// interface Settings {
//     theme: string;
//     fontSize: number;
//     showNotifications: boolean
// }
//
// function printSettings(settings: Settings): void {
//    if (!settings) {
//        throw new Error('Array cannot be empty');
//    }
//    console.log(settings);
// }
//
// let settings1: Settings = {theme:'Dark',fontSize:16,showNotifications: true};
//
// printSettings(settings1);

//3. Дженерік для пошуку елемента в масиві
// Напишіть функцію, яка приймає масив і елемент, який потрібно знайти.
// Функція повинна повертати true, якщо елемент є в масиві, і false, якщо його немає. Використовуйте дженерік.

// function contains<T>(array: T[], element: T): boolean {
//     for (const arrayElement of array) {
//         if (arrayElement === element) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(contains<number>([1, 2, 3, 4, 5], 6));

// 4. Типізувати API-запит
// Напишіть функцію, яка робить запит на API за допомогою fetch і повертає результат. Типізуйте відповідь за допомогою дженеріка. 'https://dummyjson.com/users'

// interface IUser12 {
//     id: number;
//     firstName: string;
//     lastName: string;
// }
//
// async function fetchData<T>(url: string): Promise<T[]>{
//     let response = await fetch(url);
//     let data = await response.json();
//     let {users} = data;
//     return users;
//
// }
//
// fetchData<IUser12>('https://dummyjson.com/users')
// .then((users) => {
//     console.log(users); // Масив об'єктів типу IUser12
// })

//5. Клас для роботи з користувачами
// Створіть клас User, який має такі поля:
//
// id (число),
// name (рядок),
// email (рядок).
// Додайте метод getInfo, який повертає рядок із інформацією про користувача.
//

//6. Типізувати функцію для об'єднання масивів
// Напишіть функцію, яка приймає два масиви одного типу і повертає їх об'єднання. Використовуйте дженерік.

// function mergeArrays<T>(array1: T[], array2: T[]): T[] {
//     let mergeArray: T[] = [];
//     for (const item of array1) {
//         mergeArray.push(item)
//     }
//     for (const item of array2) {
//         mergeArray.push(item)
//     }
//     return  mergeArray;
// }
// let arr2:number[] = [1,2,3];
// let arr3:number[] = [4,5,6];
//
// console.log(mergeArrays<number>(arr2, arr3));

//7. Фільтрація об'єктів за полем
// Напишіть функцію, яка приймає масив об'єктів і рядок (назву поля). Функція повинна повертати масив значень цього поля.
// Використовуйте дженерік для типізації об'єктів.
//

// interface ICustomer {
//     id: number,
//     username: string,
//     email: string
// }
//
// let customer = [
//     {id: 1, username: 'John12', email: '12321321@gmail.com'},
//     {id: 2, username: 'Jak13', email: 'qwewq@gmail.com'},
//     {id: 3, username: 'El43', email: 'xc321@gmail.com'},
//
// ];
//
// function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
//     let result: T[K][] = []
//     for (const obj of array) {
//         result.push(obj[key]);
//     }
//     return result;
// }
//
// let customerId = pluck<ICustomer, 'id'>(customer, 'id');
// console.log(customerId);

// 8. Типізувати функцію для форматування дати
// Напишіть функцію, яка приймає об'єкт Date і повертає відформатовану дату у вигляді YYYY-MM-DD. Типізуйте функцію.

/// type DateType = {
//     day: number;
//     month: number;
//     year: number
// }
//
// function formatDate(date: DateType): void{
//     for (const dateKey in date) {
//         console.log(dateKey['key'])
//
//     }
//
// }
//
// let date1: DateType = {day: 31, month: 8, year: 1988}
// formatDate(date1);

// 9. Клас для роботи зі списком
// Створіть клас TodoList, який має такі методи:
//
// addTask(task: string): void — додає завдання до списку,
// removeTask(task: string): void — видаляє завдання зі списку,
// getTasks(): string[] — повертає список завдань.

// class TodoList {
//     // Ваш код тут
// }

// 10. Типізувати функцію для обчислення суми
// Напишіть функцію, яка приймає масив чисел і повертає їх суму. Типізуйте функцію.
//
// function calculateSum(numbers: number[]): number {
//     // Ваш код тут
// }