"use strict";
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectangleArea(a, b) {
    return a * b;
}
console.log(calcRectangleArea(3, 13));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcCircleArea(r) {
    return 2 * Math.PI * r;
}
console.log(calcCircleArea(14));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCilindrArea(r, h) {
    return Math.PI * r * 2 * h;
}
console.log(calcCilindrArea(23, 9));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayDisplay(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arrayDisplay([1, 2, 3, 4, 5, 9]);
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function textWriter(text) {
    document.write(`
    <p>${text}</p>
    `);
}
textWriter('Alloha');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function liWriter(text) {
    document.write(`<ul>`);
    document.write(`
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    `);
    document.write(`</ul>`);
}
liWriter('Double Alloha');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function liWriterFactory(text, n) {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
liWriterFactory('repeat', 4);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та
// виводить його через document.write
let arr = [1, 2, 0, 'Hello', false];
function arrayDisplay1(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}
arrayDisplay1(arr);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayobject = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jacob', age: 30 },
    { id: 3, name: 'Silvia', age: 21 },
    { id: 4, name: 'Barbara', age: 28 },
];
function objectDisplay(array) {
    for (const arrayElement of array) {
        for (const ElementKey in arrayElement) {
            document.write(ElementKey, ' ', arrayElement[ElementKey], ' ');
        }
    }
}
objectDisplay(arrayobject);
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function maxNumber(arr) {
    let maxNum = 0;
    for (const number of arr) {
        if (number > maxNum) {
            maxNum = number;
        }
    }
    return maxNum;
}
function minNumber(arr) {
    let minNum = maxNumber(arr);
    for (const item of arr) {
        if (item < minNum) {
            minNum = item;
        }
    }
    return minNum;
}
console.log(minNumber([56, 34, 11, 99, 121, 12, 66, 45, 144]));
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sum([1, 2, 10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
