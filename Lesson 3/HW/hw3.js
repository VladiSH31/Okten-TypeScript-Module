"use strict";
function foobar2(url) {
    fetch(url)
        .then(res => res.json())
        .then((value) => console.log(value));
}
// 'https://dummyjson.com/users'
foobar2('https://dummyjson.com/users');
