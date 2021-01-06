// before
/* const arr = [1, 2, 3, 4, 5];
   arr.map(function(item) {
    return item + 10;
 }); */

 // after
let arr = [1,2,3,4,5];
arr = arr.map((item) => item + 10);
console.log(arr);

// before
/* const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario); */

// after
const user = { name: 'Jéssica', age: 28 };
const showAge = (user) => user.age;
console.log(showAge(user));

// before
/* const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome); */

// after
const name = 'Jéssica';
const age = 28;

const showUser = (name = 'Diego', age = 18) => ({ name, age });
console.log(showUser(name, age));
console.log(showUser(name));

// before
/* const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
} */

// after
const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve;
    })
}