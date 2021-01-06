const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

// [23,15,30]
const ages = users.map((user) => user.age);
console.log(ages);

// { name: 'Diego', age: 23, company: 'Rocketseat' }
const rocketseatOver18 = users.filter((user) => {
    if (user.age >= 18 && user.company === 'Rocketseat') {
        return user;
    }
});
console.log(rocketseatOver18);

// undefined
const googleEmployee = users.find((user) => user.company === 'Google');
console.log(googleEmployee);

// Diego: 46, Gabriel: 30
users.map((user) => user.age *= 2);
const max50 = users.filter((user) => user.age <= 50);
console.log(max50);