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
