let contador = 0;

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

function gestionarFicheroTXT(txt) {
    let lineas = txt.split("\n");
    let mensajes = document.getElementById("ficheroTXT");

    for (let i = contador; i < lineas.length; i++) {
        
        let nombre = lineas[i].split("$$%%@@")[0];
        let texto = lineas[i].split("$$%%@@")[1];

        if(nombre == "Emisor")
        {
            let emisor = document.createElement("div");
            emisor.classList.add("emisor");
            mensajes.appendChild(emisor);
            emisor.textContent = texto;
        }
        else
        {
            let receptor = document.createElement("div");
            receptor.classList.add("receptor");
            mensajes.appendChild(receptor);
            receptor.textContent = texto;
        }
        contador++;
    }
}

function load() {
    setInterval(loadDocA, 10000, "texto.txt", "txt");
}
window.onload = load;