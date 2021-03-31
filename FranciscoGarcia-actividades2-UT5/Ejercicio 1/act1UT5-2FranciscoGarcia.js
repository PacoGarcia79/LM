'use strict';

function EsNumero(numero) {
    return /^[0-9]+$/.test(numero); //NO LO PEDÍA EL EJERCICIO, PERO HE QUERIDO USAR EXPRESIONES REGULARES
                                    //PARA COMPROBAR QUE AL ARRAY SOLO LLEGAN NÚMEROS
}

function Ejercicio1(cadena, bool, funcion, array) {

    let multArray = 1;
    if (typeof cadena !== 'string' || typeof bool !== 'boolean' || !array.every(EsNumero)) console.log("Los datos recibidos no están en el formato correcto");     
    else
    {
        if (bool == true) {
            array.forEach(num => multArray *= num);
    
            if (multArray > 100) {
                if (cadena.includes("a")) console.log("La 'a' no está permitida");
                else console.log("Muy bien, no has usado la 'a'");
            }
            else console.log(`El resultado (${multArray}) de tu array es insuficiente para comprobar la cadena`);
        }
        else funcion();
    }    
}

Ejercicio1("Pepe", false, function () {
    console.log("Esta es la función");
}, [1, 2, 30])

Ejercicio1("Pepe", true, function () {
    console.log("Esta es la función");
}, [6, 2, 30])
