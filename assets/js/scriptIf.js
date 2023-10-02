let edadMia = 0; // Number

edadMia = parseInt(prompt("Ingrese su edad"));

console.log(typeof parseInt(edadMia));
if (edadMia < 16){
    alert("Usted es menor de edad");
} else if (edadMia >= 16 && edadMia < 18) {
    alert("Usted es mayor de edad pero con acompañante");
} else {
    alert("Usted es mayor de edad");
}

switch (edadMia) {
    case 0:
        alert("No ingreso nada");
        break;
    case 1:
        alert("Ingreso un 1");
        break;
    case 2:
        alert("Ingreso un 2");
        break;
    case 3:
        alert("Ingreso un 3");
        break;
    default:
        alert("Ingreso un numero mayor a 3");
        break;
}


let diaDeSemana = prompt("Ingrese un dia de la semana");
let actividad = "";

switch (diaDeSemana) {
    case "lunes":
        actividad = "Trabajar";
        break;
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        actividad = "Estudiar";
        break;
    case "sabado":
    case "domingo":
        actividad = "Descansar";
        break;
    default:
        alert("No ingreso un dia de la semana");
        break;
}


alert(actividad)


/* IF ELSE SIMPLE*/

if (edadMia < 16){
    alert("Usted es menor de edad");
}else{
    alert("Usted es mayor de edad");
}

/* IF TERNARIO */

(edadMia < 16) ? alert("Usted es menor de edad") : alert("Usted es mayor de edad");


/* nueva funcionalidad*/

/* ciclos repetitivos*/

