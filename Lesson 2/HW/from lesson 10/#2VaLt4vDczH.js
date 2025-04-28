"use strict";
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let currentNumber1 = Number(localStorage.getItem('number'));
currentNumber1 += 1;
localStorage.setItem('number', currentNumber1.toString());
let numberDiv = document.createElement('div');
numberDiv.innerText = currentNumber1.toString();
