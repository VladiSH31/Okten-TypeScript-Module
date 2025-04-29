"use strict";
// TS. Abstract class
function foobar1(key) {
    let objStr = localStorage.getItem(key);
    if (objStr) {
        return JSON.parse(objStr);
    }
    return {};
}
let user1 = foobar1('user');
let dog1 = foobar1('dog');
