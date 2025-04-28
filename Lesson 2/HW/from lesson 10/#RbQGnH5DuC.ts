// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd) {
//     let arrayLS = localStorage.getItem(arrayName);
//     if (!arrayLS) {
//         throw new Error('No such array name')
//     }
//
//     let parseArray = JSON.parse(arrayLS)
//     if (typeof objToAdd === 'object') {
//         parseArray.push(objToAdd)
//     }
//
//     localStorage.setItem(arrayName, JSON.stringify(parseArray));
// }
//
// addToLocalStorage('sessionList', {});