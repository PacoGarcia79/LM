`use strict`
/*
let campos = " ";
campos += "<form id='formulario' onsubmit='return validar()'>"
campos += "<div class='tabla'><div class='fila'>"
campos += "<label for='email'>Email: </label>"
campos += "<input type='email' id='email' name='email' pattern = '[A-Za-z0-9\.]+@iesdoctorbalmis.com' required></div>"
campos += "<div class='fila'>"
campos += "<label for='contraseña'>Contraseña: </label>"
campos += "<input type='password' id='contraseña' name='contraseña' pattern = '[0-9]{8}' required>"
campos += "</div><div class='fila'>"
campos += "<input type='submit' id='boton' value='Enviar'>"
campos += "</div></div></form>"

document.getElementById("inicio").innerHTML = campos;
*/

let inicio = document.getElementById("inicio");

let formulario = document.createElement("form");
formulario.id = "formulario";

inicio.appendChild(formulario);

let tabla = document.createElement("div");
tabla.classList.add("tabla");
formulario.appendChild(tabla);

let filaUno = document.createElement("div");
filaUno.classList.add("fila");
tabla.appendChild(filaUno);

let labelUno = document.createElement("label");
labelUno.textContent = "Email: ";
filaUno.appendChild(labelUno);
let email = document.createElement("input");
email.type = "email";
email.id = "email";
email.name = "email";
email.pattern = "[A-Za-z0-9\.]+@iesdoctorbalmis.com"; 
email.required = true;
filaUno.appendChild(email);

let filaDos = document.createElement("div");
filaDos.classList.add("fila");
tabla.appendChild(filaDos);

let labelDos = document.createElement("label");
labelDos.textContent = "Contraseña: ";
filaDos.appendChild(labelDos);
let passw = document.createElement("input");
passw.type = "password";
passw.id = "contraseña";
passw.name = "contraseña";
passw.pattern = "[0-9]{8}"; 
passw.required = true;
filaDos.appendChild(passw);

let filaTres = document.createElement("div");
filaTres.classList.add("fila");
tabla.appendChild(filaTres);

let boton = document.createElement("input");
boton.type = "submit";
boton.id = "boton";
boton.value = "Enviar";
filaTres.appendChild(boton);
