let elementsByClassName: HTMLCollectionOf<Element> = document.getElementsByClassName('target');

console.log(elementsByClassName);

let elementsByTagName: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');

let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
let f1: HTMLFormElement = forms[0];

let f1ElementUsername: HTMLInputElement = f1['username'];
let f1ElementPassword = f1['password'];

console.log(f1ElementUsername);
console.log(f1ElementPassword);

// TS. Async типізація

interface IUser {
    id: number;
    name: string;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users: IUser[]) => {
        console.log(users[0].name)
    })


async function foobar(): Promise<IUser[]> {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}