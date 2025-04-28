// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let tableGenerator = document.forms['tableGenerator'];
//
// let table = document.getElementById('table');
//
// tableGenerator.onsubmit = function (ev) {
//     table.innerText = '';
//     ev.preventDefault();
//     let linesValue = +tableGenerator.lines.value;
//     let cellsValue = +tableGenerator.cells.value;
//     let dataValue = tableGenerator.data.value;
//
//     console.log(linesValue, cellsValue, dataValue);
//     for (let i = 0; i < linesValue; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cellsValue; j++) {
//             let td = document.createElement('td')
//             td.innerText = dataValue;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
// }