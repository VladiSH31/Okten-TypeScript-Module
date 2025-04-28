"use strict";
// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значаення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд – нічого не відбувається
const currentTime = Date.now();
const lastUpdateTime = Number(localStorage.getItem('lastUpdateTime'));
let currentNumber = Number(localStorage.getItem('number'));
if (!currentNumber) {
    currentNumber = 90;
}
if (!lastUpdateTime || currentTime - lastUpdateTime >= 10 * 1000) {
    currentNumber += 10;
    localStorage.setItem('lastUpdateTime', currentTime.toString());
    localStorage.setItem('number', currentNumber.toString());
}
let div1 = document.createElement('div');
div.innerText = currentNumber.toString();
