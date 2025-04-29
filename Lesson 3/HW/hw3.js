"use strict";
async function foobar2(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
void foobar2('https://dummyjson.com/users');
