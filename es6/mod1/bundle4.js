// before

/* function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
*/
// after
function showInfo({
  name,
  age
}) {
  return `${name} is ${age} years old`;
}

const user = {
  name: 'Jéssica',
  age: 28
};
console.log(showInfo(user));
