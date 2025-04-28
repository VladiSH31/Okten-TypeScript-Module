"use strict";
// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id=”text”.
let div2 = document.createElement('div');
div2.setAttribute('id', 'text');
document.body.append(div2);
div2.style.width = '200px';
div2.style.height = '200px';
div2.style.background = 'grey';
let button = document.createElement('button');
button.innerText = 'Send';
document.body.append(button);
button.onclick = function () {
    div2.style.display = 'none';
};
