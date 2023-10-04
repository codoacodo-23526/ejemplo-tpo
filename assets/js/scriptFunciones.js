//SUMAR 2 NUMEROS

function sumarDosNumeros (numero1, numero2) { //Le pasamos los parametros de la funcion
    //SCOPE LOCAL
    return numero1 + numero2;
}

function restarDosNumeros(numero1, numero2) {
    return numero1 - numero2;
}


function multiplicarDosNumeros(numero1, numero2) {
    return numero1 * numero2;
}

//SCOPE GLOBAL

let resultadoSuma = 0;
let resultadoResta = 0;
let resultadoMultiplicar = 0;

//sumarDosNumeros(11,12);

resultadoSuma = sumarDosNumeros(10, 20);
resultadoResta = restarDosNumeros(10, 20)
resultadoMultiplicar = multiplicarDosNumeros(10, 20)


//alert("El resultado de la suma de 2 numeros es: " + resultadoSuma);
//alert("El resultado de la resta de 2 numeros es: " + resultadoResta);
//alert("El resultado de la multiplicacion de 2 numeros es: " + resultadoMultiplicar);


//Arrow functions

// function saludar () {
//     return "Hola mundo";
// }

// //ES LO MISMO PER MAS COMPACTA
// let saludar = () => { // PARAMETROS
//     "Hola Mundo";
// }



function saludoPersonalizado(nombre) {
 //SCOPE LOCAL
    let saludo = "hola";
    //CLOSURE 

    function saludar() {
        
        return saludo + nombre;
    }

    return saludar();
}


console.log (saludoPersonalizado("Pirulo"));


//CALLBACKS que pasar por parametro una funcion

function nombreCompleto (nombre, apellido) {

    return nombre + " " + apellido;

}

function saludar(nombre, apellido, nombreCompleto) {

    return "Hola" + nombreCompleto (nombre, apellido);
}


console.log(saludar("Lionel", "Messi", nombreCompleto));