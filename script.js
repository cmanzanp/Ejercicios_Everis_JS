// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA USAR FILTER. SE PUEDE RECORRER CON CUALQUIER BUCLE.
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

let arrayUsuarios = [];

function onLoad() {
  createUsers();
  let nuevosUsuarios = filterUsers(arrayUsuarios);
  // Se imprime por consola el array con todos los usuarios
  console.log(arrayUsuarios);
  // Se imprime por consola el nuevo array filtrado
  console.log(nuevosUsuarios);
}

// Constructor de User
function User(name, country, money, premiumAccount) {
  this.name = name;
  this.country = country;
  this.money = money;
  this.premiumAccount = premiumAccount;
}

// Se inicializan los objetos User
const user1 = new User("usuario1", "spain", 199, true);
const user2 = new User("usuario2", "france", 0, false);
const user3 = new User("usuario3", "spain", 537, false);
const user4 = new User("usuario4", "italy", 1004, true);
const user5 = new User("usuario5", "spain", 250, false);
const user6 = new User("usuario6", "ireland", 799, true);
const user7 = new User("usuario7", "spain", 3345, false);

// Se añaden los objetos al array 'arrayUsuarios'.
function createUsers() {
  arrayUsuarios.push(user1);
  arrayUsuarios.push(user2);
  arrayUsuarios.push(user3);
  arrayUsuarios.push(user4);
  arrayUsuarios.push(user5);
  arrayUsuarios.push(user6);
  arrayUsuarios.push(user7);
}

// Método que retorna un nuevo array con los objetos que cumplan las condiciones de country === "spain" y money > 200.
function filterUsers(arrayUsuarios) {
  let nuevosUsuarios = [];
  for (i = 0; i < arrayUsuarios.length; i++) {
    if (arrayUsuarios[i].country === "spain" && arrayUsuarios[i].money > 200) {
      nuevosUsuarios.push(arrayUsuarios[i]);
    }
  }
  return nuevosUsuarios;
}
