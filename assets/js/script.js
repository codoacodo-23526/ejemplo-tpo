console.log('Hello World!');

// Declarar una variable 
//Nombre de la variable no permite espacios
/* var nombre Variable;
var nombreVariable;
*/

// Buena practica camelCase
var nombreVariable;
let nombreVariable2;

//snake_case
var nombre_variable;
let nombre_variable2;


nombreVariable = "Hola Mundo";


const email = "german@gmail.com";

//email = "pablo@gmail.com";



if (true) {
    let nombre = "German";
    console.log(nombre); // German
}

//console.log(nombre); // undefined


if (true) {
    let nombre = "German";
    console.log(nombre);
}

//console.log(nombre); // German


// Tipos de datos

let nombre = "German"; // String
console.log(typeof nombre);

let edad = 30; // Number
console.log(typeof edad); // number

let sueldo = 1.234; // Number
console.log(typeof sueldo); // number

let hijos = false; // Boolean
console.log(typeof hijos); // boolean

let persona = {   //objeto literal en javascript
    nombre: 'German', // String
    edad: 30, // Number
    sueldo: 1.234, // Number
    hijos: false, // Boolean
}

console.log(typeof persona); // object
console.log(persona); // object
console.log(typeof persona.nombre); // German
console.log(persona.edad); // 30
console.log(persona.sueldo); // 1.234
console.log(persona.hijos); // false

let arrayDeCadenas = ["German", "Pablo", "Pirulo", "0", "Lionel", "Messi"];
console.log(arrayDeCadenas); // object
console.log(arrayDeCadenas[0]); // German
console.log(arrayDeCadenas[4]); // Lionel

let posicionFinal = arrayDeCadenas.length - 1;
console.log(arrayDeCadenas[posicionFinal]); // undefined

var malaDivision = "as35" / 2; 

console.log(malaDivision); // 17.5


//null
let bebida = null; 

console.log(bebida); // null

//NaN
let comida = "asdasdasd" * 3.5;

console.log(comida); // NaN

let numeroUno = "1"; // String

console.log(Number(numeroUno) + 1); // 2 a Number

console.log(Number('100   ')); // devuelve NaN

console.log(parseInt('18.9')); // 18

console.log(parseInt('34-F-45')); //devuelve 34
console.log(parseInt('1°Juego')); //devuelve 1

var num1 = 10.4;


let variableCadena = String(3005);
console.log(typeof variableCadena); // 3005


console.log(String(arrayDeCadenas)); // 1234

console.log(String(persona)); // [object Object]

let numeroA = 10;
let numeroB = 20;
let resultado = String(numeroA) + String(numeroB);
console.log(resultado); // 1020

console.log(resultado.length); // 4