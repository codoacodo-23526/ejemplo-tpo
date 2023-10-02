let suma = 0;
let contador = 0;

while (true) {

    //Pedimos al usuario la entrada por valor 

    let entradaPorTeclado = prompt("Ingrese por teclado un valor numerico (para salir del programa ingrese un valor no numero): ")

    let numero = Number(entradaPorTeclado) // Convertiendo la entrada a numero

    if (isNaN(numero)){

        let respuesta = confirm("Desea salir de la ejecucion del programa??");
        if (respuesta){
            break; //SALGO DE LA EJECUCION DE MI PROGRAMA o CICLO REPETIVO
        }
        
    }

    //suma = suma + numero; //ACUMULADOR o SUMADOR
    //contador = contador + 1; //CONTADOR DE VUELTAS

    contador += 1;
    suma += numero;
}

alert("La suma de los numeros ingresados es: " + suma);

