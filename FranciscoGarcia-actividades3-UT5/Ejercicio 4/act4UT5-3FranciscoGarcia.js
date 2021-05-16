`use strict`

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();

    let datosCorrectos = true;
    let capaOculta = document.getElementById("oculto");

    let patronUsuario = /^[A-Z][\w\W]+[0-9]$/;
    let usuario = document.getElementById("usuario");

    let patronContraseña = /^[0-9][\w\W]{6}[A-Z]$/;
    let contraseña = document.getElementById("contraseña");

    let repiteContraseña = document.getElementById("repiteContraseña");

    let patronEmail = /^[A-Za-z0-9\.]+@[\w._]+\.[a-zA-Z]{2,4}$/;
    let email = document.getElementById("email");

    let patronNombre = /^[A-Z][a-z]+$/;
    let nombre = document.getElementById("nombre");

    let patronApellido = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    let apellidos = document.getElementById("apellidos");

    let patronEdad = /^1[0-9]{1,2}$/;
    let edad = document.getElementById("edad");

    let patronTelefono = /^[6|7|9][0-9]{8}$/;
    let telefono = document.getElementById("telefono");

    if (!patronUsuario.test(usuario.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El nombre de usuario no es válido.\r\n";
        usuario.style.border = "solid red";   
        datosCorrectos = false;        
    }
    else usuario.style.border = "solid green";

    if (!patronContraseña.test(contraseña.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El formato de contraseña no es válida.\r\n";
        contraseña.style.border = "solid red";   
        datosCorrectos = false;
    }
    else contraseña.style.border = "solid green";

    if (!patronContraseña.test(repiteContraseña.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El formato de la confirmación de contraseña no es correcto.\r\n";
        repiteContraseña.style.border = "solid red";   
        datosCorrectos = false;
    }
    else repiteContraseña.style.border = "solid green";
   
    if (!patronEmail.test(email.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El formato del email no es correcto.\r\n";
        email.style.border = "solid red";   
        datosCorrectos = false;
    } 
    else email.style.border = "solid green";

    if (contraseña.value != repiteContraseña.value) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "Las contraseñas no coinciden.\r\n";
        datosCorrectos = false;
    }    

    if (!patronNombre.test(nombre.value)) { 
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El formato del nombre no es válido.\r\n"; 
        nombre.style.border = "solid red";        
        datosCorrectos = false;
    }
    else nombre.style.border = "solid green";

    if (!patronApellido.test(apellidos.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El formato de los apellidos no es válido.\r\n"; 
        apellidos.style.border = "solid red";    
        datosCorrectos = false;
    }
    else apellidos.style.border = "solid green";

    if (!patronEdad.test(edad.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "Ha introducido un número muy alto.\r\n"; 
        edad.style.border = "solid red";          
        datosCorrectos = false;
    }
    else edad.style.border = "solid green";

    if (!patronTelefono.test(telefono.value)) {
        capaOculta.setAttribute('style', 'white-space: pre;');
        capaOculta.style.visibility = "visible";
        capaOculta.textContent += "El número de teléfono no es correcto.\r\n"; 
        telefono.style.border = "solid red";        
        datosCorrectos = false;
    }
    else telefono.style.border = "solid green";
    
    if (datosCorrectos == true) this.submit();
}