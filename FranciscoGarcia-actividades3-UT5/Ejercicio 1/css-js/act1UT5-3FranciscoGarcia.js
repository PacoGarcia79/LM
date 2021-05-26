`use strict`

window.onload = loadDocA("./xml/libros.xml", "xml");

function loadDocA(fichero, tipo) {
    let http = new XMLHttpRequest();
    http.open("GET", fichero, true);
    http.send();
    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            if (tipo == "xml") {
                gestionarFicheroXML(http.responseXML)
            }
            else
                gestionarFicheroTXT(http.responseText)
        }
    })
}

function AñadeElemento(padre, elemento, clase, textoContenido) {
    let capa = document.createElement(elemento);
    capa.classList.add(clase);
    capa.textContent = textoContenido;
    padre.appendChild(capa);

    return capa;
}

function AñadeEncabezado(elemento) {

    let encabezado = AñadeElemento(elemento, "div", "encabezado", "");
    AñadeElemento(encabezado, "div", "filaEncabezado", "ISBN");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Título");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Nivel Profundidad");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Autor");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Editorial");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Fecha Publicacion");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Página Web");
    AñadeElemento(encabezado, "div", "filaEncabezado", "Precio");

}

function gestionarFicheroXML(docXML) {

    let minimos = precioMenor(docXML);;
    let divCelda = "";
    let padre = document.getElementById("ficheroXML");

    for (let i = 0; i < docXML.getElementsByTagName("libreria").length; i++) {
        let libreria = AñadeElemento(padre, "div", "libreria", "");
        let tabla = AñadeElemento(libreria, "div", "tabla", "");
        let nombreLibreria = docXML.getElementsByTagName("libreria")[i].getElementsByTagName("nombre")[0].textContent;
        AñadeElemento(tabla, "div", "caption", nombreLibreria);

        AñadeEncabezado(tabla);

        for (let j = 0; j < docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro").length; j++) {
            if (minimos[i] == Number(docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent))
                divCelda = "celdaMenor";
            else
                divCelda = "celda";
            
            let fila = AñadeElemento(tabla, "div", "fila", "");
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("ISBN")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("titulo")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("nivelProfundidad")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("autor")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("editorial")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("fechaPublicacion")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("paginaWeb")[0].textContent);
            AñadeElemento(fila, "div", divCelda, docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent);
        }
    }
}

function precioMenor(docXML) {
    let minimo;
    let minimos = new Array();

    for (let i = 0; i < docXML.getElementsByTagName("libreria").length; i++) {
        for (let j = 0; j < docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro").length; j++) {
            if (j == 0)
                minimo = Number(docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent);
            else {
                let valor = Number(docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent);

                if (minimo > valor) {
                    minimo = valor;
                }
            }
        }
        minimos.push(minimo);
    }
    return minimos;
}