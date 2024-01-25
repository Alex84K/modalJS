const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(typeof john);
console.log(john.firstName);
console.log(john.lastName);
console.log(john.age);
console.log(john.fullName());
john.age = 28;
console.log(john.age);
console.log(john);
const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34
}
console.log(peter);
peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(peter.fullName());
console.log(peter.id);
console.log(peter.hobby);
peter['id'] = 2000;
console.log(peter.id);
console.log(peter);
let info = 'age';
// console.log(peter.info);
console.log(peter[info]);
printObject(peter);
printObject(john);
const mary = new Person(3000, 'Mary', 'Smith', 19);
console.log(mary);
mary.hobby = 'cooking';
printObject(mary)
console.log(mary.fullName());
const persons = [mary, peter, new Person(4000, 'Rabindranate', 'Anand', 33), {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    id: 1000
}]
console.log(persons.length);
for(let i = 0; i < persons.length; i++){
    // console.log(persons[i]);
    printObject(persons[i])
}

function printObject(obj) {
    console.log('========================');
    for (let fieldName in obj) {
        if (typeof obj[fieldName] === 'function') {
            console.log(`${fieldName} -> ${obj[fieldName]()}`);
        } else {
            console.log(`${fieldName} -> ${obj[fieldName]}`);
        }
    }
    console.log('========================');
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}