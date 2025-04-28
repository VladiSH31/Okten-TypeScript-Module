// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.innerText = 'Inner TEXT';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'grey';
div.style.color = 'red';
div.style.fontSize = '16px';
document.body.appendChild(div);
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv)