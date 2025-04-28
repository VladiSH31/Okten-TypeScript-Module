//#j693ca8

// – створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let inputAge:HTMLElement | null = document.getElementById('age');
let inputAge:HTMLInputElement = document.createElement('input');
inputAge.classList.add('age');
// let buttonAge:HTMLElement | null = document.getElementById('button')
let buttonAge:HTMLButtonElement = document.createElement('button');
buttonAge.classList.add('button-age')

buttonAge.onclick = function () {
    let age: number = Number(inputAge.value);
    if (age >= 18) {
        console.log('Ви повнолітній')
    } else if (age < 18) {
        console.log('Вам ще немає 18')
    } else {
        console.log('Введіть коректне число')
    }
}