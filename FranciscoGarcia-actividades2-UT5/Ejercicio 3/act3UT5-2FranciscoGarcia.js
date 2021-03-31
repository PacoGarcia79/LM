'use strict';

function Ejercicio3() {

    let numero;
    let contador = 1;
    let array = new Array();
    do {

        numero = prompt("Introduzca un número: ");
        if (isNaN(numero)) console.log("No es un número")
        else {
            if (contador % 2 == 0) array.unshift(+numero);
            else array.unshift(Number(numero));
        }
        contador++;

    } while (!isNaN(numero));

    console.log(array);

    console.log(array.filter(num=>num%3 == 0));

    function ordenar ( a, b ){ return b - a; }

    console.log(array.filter(num=>num%3 == 0).sort(ordenar));
}

Ejercicio3();