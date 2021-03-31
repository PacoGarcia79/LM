'use strict';

let trabajador = new Array();

function Ejercicio4(...trabajador) {

    let nombre, horas, precioHora, salarioBruto;

    for (let i in trabajador) {
        [nombre, horas, precioHora] = trabajador[i];
        salarioBruto = horas * precioHora;
        console.log("Nombre: " + nombre);
        console.log("Salario Bruto Semanal: " + salarioBruto);
        console.log("Retención Hacienda: " + (salarioBruto)* 20 / 100);
        console.log("Retención Seguridad Social: " + (salarioBruto)* 8 / 100);
        console.log("Salario Neto Semanal: " + (salarioBruto - (salarioBruto)* 20 / 100 - (salarioBruto)* 8 / 100));
    }
}

Ejercicio4(["Antonio Gómez", 40, 8],["Jose Antúnez", 40, 10]);