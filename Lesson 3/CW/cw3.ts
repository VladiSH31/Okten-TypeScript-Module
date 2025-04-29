// TS. Abstract class

// abstract class Animal {
//     isAlive: boolean;
//
//     constructor(isAlive: boolean) {
//         this.isAlive = isAlive;
//     }
//
//     abstract bark(): void;
// }
//
// class Bird extends Animal {
//
//     constructor(isAlive: boolean, wings: boolean) {
//         super(isAlive);
//         this.wings = wings;
//     }
//
//    wings: boolean;
//
//     bark(): void {
//         console.log('Chik Chirik')
//     }
//
//
// }

// TS. Demo with interface

// interface IAnimal {
//     isAlive: boolean;
//     sound: () => void;
// }
//
// interface X {
//     id: number;
// }
//
// class Bird implements IAnimal, X {
//
//     private _isAlive: boolean;
//     private _wings: boolean;
//     private _id: number;
//
//
//     constructor(wings: boolean, isAlive: boolean, id: number) {
//         this._wings = wings;
//         this._isAlive = isAlive;
//         this._id = id;
//     }
//
//     get isAlive(): boolean {
//         return this._isAlive;
//     }
//
//     set isAlive(value: boolean) {
//         this._isAlive = value;
//     }
//
//     get wings(): boolean {
//         return this._wings;
//     }
//
//     set wings(value: boolean) {
//         this._wings = value;
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
//
//     sound(): void {
//     }
//
//
// }

// TS. Demo with types

// type AnimalType = {
//     isAlive: boolean;
//     sound: () => {
//
//     }
// }
//
// class Horse implements AnimalType {
//     private readonly _isAlive: boolean;
//     private readonly _id: number;
//
//     constructor(isAlive: boolean, id: number) {
//         this._isAlive = isAlive;
//         this._id = id;
//     }
//
//
//     get isAlive(): boolean {
//         return this._isAlive;
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
//     sound(): {} {
//         return {};
//     }
//
// }

// TS. Generics

// class UserGen<T1> {
//     id: T1;
//     name:string;
//
//     constructor(id: T1, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1, 'vasya');
// let userGen2 = new UserGen<string>('asdsa', 'Anton');
// let userGen3 = new UserGen<{x: number}>({x: 100500}, 'Anton');

interface IUserLM {
    id: number;
    name: string
}

interface IDog {
    aka: string;
}

function foobar1<T>(key: string): T {
    let objStr = localStorage.getItem(key);

    if (objStr) {
        return JSON.parse(objStr) as T;
    }
    return {} as T;
}

let user1 = foobar1<IUserLM>('user');
let dog1 = foobar1<IDog>('dog');





