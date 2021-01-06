// before
/*
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};
*/

// after
const name = 'Jéssica';
const age = 28;
const user = {
    name,
    age,
    city: 'Belo Horizonte'
};

console.log(user);