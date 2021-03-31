'use strict';

function verAsignaturas(...alumno) {

    alumno = new Array();             //EL ENUNCIADO HABLA DE LA FUNCION verAsignaturas, PERO AL VER QUE EN                                                                           
    return alumno;                    //EN EL EJEMPLO TAMBIÉN HAY UNA FUNCION Ejercicio2, HE DECIDIDO 
}                                     //REALIZARLO DE ESTA FORMA  

function Ejercicio2(...verAsignaturas) {
    let nombre, curso, resto;
    if (verAsignaturas == 0) console.log("No hay datos que mostrar")
    else {
        for (let i in verAsignaturas) {
            [nombre, curso, ...resto] = verAsignaturas[i];
            console.log(nombre + "-" + curso + "-asignaturas:" + resto.join("/"));
        }
    }
}

Ejercicio2(["Pepe", "DamA", "Programación", "FOL"], ["Juan", "DamB", "ED", "FOL", "BBDD"], ["Juan", "DamC", "BBDD", "LM"]);
Ejercicio2();
