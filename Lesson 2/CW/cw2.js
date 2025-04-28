"use strict";
let elementsByClassName = document.getElementsByClassName('target');
console.log(elementsByClassName);
let elementsByTagName = document.getElementsByTagName('div');
let forms = document.forms;
let f1 = forms[0];
let f1ElementUsername = f1['username'];
let f1ElementPassword = f1['password'];
console.log(f1ElementUsername);
console.log(f1ElementPassword);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
    console.log(users[0].name);
});
async function foobar() {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}
let s = 'string';
let g = true;
let f = 0;
