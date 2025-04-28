"use strict";
//#ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об’єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
let f4 = document.createElement('form');
let userDiv = document.createElement('div');
div.classList.add('target');
f4.onsubmit = function (e) {
    e.preventDefault();
    let name = f1.username.value;
    let age = f1.userage.value;
    let surname = f1.usersurname.value;
    userDiv.innerText = name + ' ' + age + ' ' + surname;
};
