"use strict";
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
function formatDate(date, key = key) {
    for (const dateKey in date) {
        console.log(dateKey[key]);
    }
}
let date1 = { day: 31, month: 8, year: 1988 };
formatDate(date1);
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
