`use strict`

window.onload = function () {
    loadLDocA();
}

function loadLDocA() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarFicheroTXT(this);
        }
    };
    xhr.open("GET", "./txt/texto.txt", true);
    xhr.send();
}

function gestionarFicheroTXT(txt){

    let docTXT = txt.responseText;
    let lineas = docTXT.split("\n");
        
    for(let i = 0; i < lineas.length; i++){
        myVar = setTimeout(leerLinea, i*10000, lineas[i],i);
    }          
}


function leerLinea(linea,i){   
    if (i%2==0) //emisor
        document.getElementById("ficheroTXT").innerHTML += "<div class='emisor'>" + linea + "</div>";
    else //receptor
        document.getElementById("ficheroTXT").innerHTML += "<div class='receptor'>" + linea + "</div>";
}







