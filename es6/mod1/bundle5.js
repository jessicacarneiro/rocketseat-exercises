// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y); // 5.2

const user1 = {
  name: 'Jéssica',
  age: 28,
  address: {
    city: 'Belo Horizonte',
    state: 'MG',
    country: 'Brazil'
  }
};
const user2 = { ...user1,
  name: 'Luiz Filipe'
};
const user3 = { ...user1,
  address: {
    city: 'Bom Despacho'
  }
};
console.log(user2);
console.log(user3);
