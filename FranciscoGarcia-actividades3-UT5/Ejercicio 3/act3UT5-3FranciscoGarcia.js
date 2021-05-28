`use strict`

window.onload = CreaFormulario();

function AñadeElemento(padre, elemento, clase, textoContenido) {
    let capa = document.createElement(elemento);
    capa.classList.add(clase);
    capa.textContent = textoContenido;
    padre.appendChild(capa);

    return capa;
}

function CreaFormulario() {
    let inicio = document.getElementById("inicio");
    let formulario = document.createElement("form");
    formulario.id = "formulario";
    inicio.appendChild(formulario);

    let tabla = AñadeElemento(formulario, "div", "tabla", "");
    let filaUno = AñadeElemento(tabla, "div", "fila", "");
    AñadeElemento(filaUno, "label", "labelUno", "Email: ");

    let email = AñadeElemento(filaUno, "input", "email", "");
    email.type = "email";
    email.id = "email";
    email.name = "email";
    email.pattern = "[A-Za-z0-9\.]+@iesdoctorbalmis.com";
    email.required = true;

    let filaDos = AñadeElemento(tabla, "div", "fila", "");
    AñadeElemento(filaDos, "label", "labelDos", "Contraseña: ");

    let passw = AñadeElemento(filaDos, "input", "passw", "");
    passw.type = "password";
    passw.id = "contraseña";
    passw.name = "contraseña";
    passw.pattern = "[0-9]{8}";
    passw.required = true;

    let filaTres = AñadeElemento(tabla, "div", "fila", "");

    let boton = AñadeElemento(filaTres, "input", "boton", "");
    boton.type = "submit";
    boton.id = "boton";
    boton.value = "Enviar";

}


