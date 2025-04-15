// ? 1
let age: number = 50;
let firstName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => { return 100 + a };

console.log(callback(20))

// ? 2
let anything: unknown = -20;
anything = 'Text';
anything = {};

console.log(anything)

// ? 3
let some: unknown;
some = 'Text';
let str: string;
str = some as string;

console.log(str)
// let some: string;
// some = 'Text';

// let str: string;

// str = some;

// ? 4
const users: { name: string, id: number }[] = [
    {
        name: "Semen",
        id: 1,
    },
    {
        name: "Michael",
        id: 2,
    },
    {
        name: "Lllala",
        id: 3,
    }
];
console.log(users)

// ? 5
enum Status {
    Loading = "Loading",
    Ready = "Ready"
}

const getStatus = (isLoading: boolean): Status => isLoading ? Status.Loading : Status.Ready;
console.log(getStatus(true))

// ? 6
let stringOrNumber: string | number;
stringOrNumber = "Hello";
stringOrNumber = 15;
console.log(stringOrNumber)

// ? 7
let usersStatus: 'enable' | "disable";
usersStatus = "enable"

console.log(usersStatus);

// ? 8
const showMessage = (message: string) => {
    console.log(message);
}

const calc = (num1: number, num2: number): number => {
    return num1 + num2;
}

const customError = (): never => {
    throw new Error('Error');
}

// ? 9
type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    },
}

const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
}

const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}

console.log(page1);
console.log(page2);