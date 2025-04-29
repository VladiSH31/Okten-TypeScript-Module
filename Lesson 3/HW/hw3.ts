interface IUSerDummy {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
}

interface dummyUser {
    users: IUSerDummy[];
}

async function foobar2<T>(url: string) {
    if (!url) {
        let result = await fetch(url)
        const data: T = await result.json();
        return data;
    } else {
        throw new Error('Error');
    }

}


foobar2<dummyUser>('https://dummyjson.com/users').then(r => console.log(data))