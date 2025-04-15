// ? 1
var age = 50;
var firstName = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
console.log(callback(20));
// ? 2
var anything = -20;
anything = 'Text';
anything = {};
console.log(anything);
// ? 3
var some;
some = 'Text';
var str;
str = some;
console.log(str);
// let some: string;
// some = 'Text';
// let str: string;
// str = some;
// ? 4
var users = [
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
console.log(users);
// ? 5
var Status;
(function (Status) {
    Status["Loading"] = "Loading";
    Status["Ready"] = "Ready";
})(Status || (Status = {}));
var getStatus = function (isLoading) { return isLoading ? Status.Loading : Status.Ready; };
console.log(getStatus(true));
// ? 6
var stringOrNumber;
stringOrNumber = "Hello";
stringOrNumber = 15;
console.log(stringOrNumber);
// ? 7
var usersStatus;
usersStatus = "enable";
console.log(usersStatus);
// ? 8
var showMessage = function (message) {
    console.log(message);
};
var calc = function (num1, num2) {
    return num1 + num2;
};
var customError = function () {
    throw new Error('Error');
};
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
console.log(page1);
console.log(page2);
