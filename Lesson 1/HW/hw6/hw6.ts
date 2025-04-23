// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

class User12 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string


    constructor(id: number, name: string, surname: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

}

let users = []
users.push(new User12(1, 'John', 'Johnson', 'mail1@mail.com', '0633331101'));
users.push(new User12(2, 'Jacob', 'Jacobson', 'mail2@mail.com', '0633331102'));
users.push(new User12(3, 'Sara', 'Em', 'mail3@mail.com', '0633331103'));
users.push(new User12(4, 'Jessica', 'As', 'mail4@mail.com', '0633331104'));
users.push(new User12(5, 'Alla', 'Bas', 'mail5@mail.com', '0633331105'));
users.push(new User12(6, 'Elloy', 'Das', 'mail6@mail.com', '0633331106'));
users.push(new User12(7, 'Josh', 'Cal', 'mail7@mail.com', '0633331107'));
users.push(new User12(8, 'Adam', 'Joson', 'mail8@mail.com', '0633331108'));
users.push(new User12(9, 'Eva', 'Johnsh', 'mail9@mail.com', '0633331109'));
users.push(new User12(10, 'Bob', 'Jotah', 'mail10@mail.com', '0633331110'));

console.log(users);

//#2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об’єкти з парними id (filter)

let ovenUsers: User12[] = users.filter((user: User12) => user.id % 2 === 0);
console.log(ovenUsers);

// #pOeHKct.
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers: User12[] = users.sort((user1, user2) => {
    return user2.id - user1.id;
})

console.log(sortedUsers);

//#nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(11, 'Oleg', 'Petrov', 'mail11@gmail.com', '380112223311', ['bread', 'milk']),
    new Client(22, 'Max', 'Ivanov', 'mail22@gmail.com', '380112223322', ['bread', 'milk', 'tomat']),
    new Client(33, 'Olga', 'Valtsov', 'mail3@gmail.com', '380112223333', ['bread', 'cucumber', 'milk']),
    new Client(44, 'Valentin', 'Shevchenko', 'mail44@gmail.com', '380112223344', ['beer', 'milk']),
    new Client(55, 'Semen', 'Illenko', 'mail55@gmail.com', '380112223355', ['meat', 'milk']),
    new Client(66, 'Mark', 'Glagolov', 'mail66@gmail.com', '380112223366', ['bread', 'eggs']),
    new Client(77, 'Oleksandr', 'Malt', 'mail77@gmail.com', '380112223377', ['bread', 'tomat']),
    new Client(88, 'Vera', 'Falonenko', 'mail88@gmail.com', '380112223388', ['cucumber', 'tomat']),
    new Client(99, 'Nadezhda', 'Bilos', 'mail99@gmail.com', '380112223399', ['bread', 'beer', 'meat']),
    new Client(111, 'Anna', 'Pedrenko', 'mail110@gmail.com', '380112223300', ['bread', 'milk', 'eggs']),
]

//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((client1, client2) => {
    return client1.order.length - client2.order.length
})
console.log(sortedClients);
//#vV9a6584I5
//
// – Створити функцію конструктор яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, manufactur, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufactur = manufactur;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }
    this.info = function () {
        for (const Key in this) {
            console.log(Key, this[Key])
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed+newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('Grande Punto', 'Fiat', 2011, 150, 1.4);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(60);
car1.info();
car1.changeYear(2020)
car1.info();
car1.addDriver({name: 'Vladislav'})
console.log(car1);

//#5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear (newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car1 {
    constructor(model, manufacture, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufactur = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }
    info = function () {
        for (const Key in this) {
            console.log(Key, this[Key])
        }
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed+newSpeed;
    }
    changeYear = function (newValue) {
        this.year = newValue
    }
    addDriver = function (driver) {
        this.driver = driver;
    }
}

let car2 =new Car1('X5', 'BMW', 2010, 200, 2.0);
car2.info();

//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}




let prince = new Prince('John', 35,36)

let cinderellas = [
    new Cinderella('Olga', 25, 39),
    new Cinderella('Anna', 22, 38),
    new Cinderella('Natalia', 21, 41),
    new Cinderella('Irina', 27, 35),
    new Cinderella('Alla', 23, 37),
    new Cinderella('Anna', 24, 39),
    new Cinderella('Olga', 25, 38),
    new Cinderella('Viktoria', 38, 36),
    new Cinderella('Natalia', 32, 35),
    new Cinderella('Tetiana', 18, 41),
]

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log(cinderella)
    }
}

let finded = cinderellas.find(value => value.footSize === prince.shoeSize)
console.log(finded);

