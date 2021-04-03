'use strict';

function IntroducirDatos(){
    let nombre = prompt("Introduce el nombre: ");
    let horas = prompt("Introduce el total de horas trabajadas: ");
    let precioHora = prompt("Introduce el precio por hora trabajada: ")
    let trabajador = new Array(nombre, Number(horas), Number(precioHora));
    return trabajador;
}

function Ejercicio4(...IntroducirDatos) {

    let nombre, horas, precioHora, salarioBruto;  
    
    for (let i in IntroducirDatos) {
        [nombre, horas, precioHora] = IntroducirDatos[i];
        salarioBruto = horas * precioHora;
        console.log("Nombre: " + nombre);
        console.log("Salario Bruto Semanal: " + salarioBruto);
        console.log("Retención Hacienda: " + (salarioBruto)* 20 / 100);
        console.log("Retención Seguridad Social: " + (salarioBruto)* 8 / 100);
        console.log("Salario Neto Semanal: " + (salarioBruto - (salarioBruto)* 20 / 100 - (salarioBruto)* 8 / 100));
    }
}

Ejercicio4(IntroducirDatos());