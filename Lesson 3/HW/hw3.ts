// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь


//interface IUSerDummy {
//     id: number,
//     firstName: string,
//     lastName: string,
//     maidenName: string,
// }
//
// interface dummyUser {
//     users: IUSerDummy[];
// }
//
// function foobar2<T>(url: string) {
//     fetch(url)
//         .then(res => res.json())
//         .then((value: T) => console.log(value));
// }
//
//
//
// foobar2<dummyUser>('https://dummyjson.com/users')

interface IUSerDummy {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
}

async function foobar2<T>(url: string): Promise<void> {
    const response = await fetch(url);
    const data: T = await response.json();
    console.log(data);
}

void foobar2<IUSerDummy[]>('https://dummyjson.com/users');
