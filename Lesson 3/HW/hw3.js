"use strict";
// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
async function foobar2(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
void foobar2('https://dummyjson.com/users');
