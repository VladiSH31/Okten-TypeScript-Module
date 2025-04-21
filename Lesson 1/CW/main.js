"use strict";
// let a: string = 'hello okten';
// let b: boolean = true;
// let c: number = 1;
//
// function calculator(arg1: number, arg2: number): number {
//     return arg1 + arg2;
// }
//
// calculator(12, 18);
//
// let arr: number[] = [1, 2, 3];
// arr.push(4);
// type UserType = {
//     name: string;
//     age: number;
//     status: boolean;
//     greeting: (str: string) => string
// }
//
// let users: UserType[] = [
//     {
//         greeting(str: string) {
//             return 'Hello1'
//         },
//         name: 'Oleg',
//         age: 23,
//         status: true
//     },
//     {
//
//         name: 'Vasya',
//         age: 29,
//         status: false,
//         greeting: function (str: string) {
//             return 'Hello2'
//         },
//     },
// ]
// interface IUser {
//     name: string;
//     age: number;
//     status: boolean;
//     greeting: (str: string) => string
// }
//
// let users: IUser[] = [
//     {
//         greeting(str: string) {
//             return 'Hello1'
//         },
//         name: 'Oleg',
//         age: 23,
//         status: true
//     },
//     {
//
//         name: 'Vasya',
//         age: 29,
//         status: false,
//         greeting: function (str: string) {
//             return 'Hello2'
//         },
//     },
// ]
class User {
    // name: string ;
    // age: number;
    // status: boolean;
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
        this.name = name;
        this.age = age;
        this.status = status;
    }
}
let users = [
    {
        greeting(str) {
            return 'Hello1';
        },
        name: 'Oleg',
        age: 23,
        status: true
    },
    {
        name: 'Vasya',
        age: 29,
        status: false,
        greeting: function (str) {
            return 'Hello2';
        },
    },
    new User('John', 25, true),
];
console.log(users);
