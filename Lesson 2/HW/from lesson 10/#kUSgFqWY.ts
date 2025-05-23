// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let tableGenerator = document.forms['tableGenerator'];
let tableGenerator:HTMLFormElement = document.createElement('form');
tableGenerator.classList.add('tableGenerator')

let table: HTMLTableElement = document.createElement('table');

tableGenerator.onsubmit = function (ev: SubmitEvent) {
    table.innerText = '';
    ev.preventDefault();
    let linesValue: number = Number(tableGenerator.lines.value);
    let cellsValue: number = Number(tableGenerator.cells.value);
    let dataValue: string | number = tableGenerator.data.value;

    console.log(linesValue, cellsValue, dataValue);
    for (let i: number = 0; i < linesValue; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');
        for (let j:number = 0; j < cellsValue; j++) {
            let td: HTMLTableCellElement = document.createElement('td')
            td.innerText = dataValue.toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

}