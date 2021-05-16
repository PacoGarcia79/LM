`use strict`

window.onload = function () {
    loadLDocA();
}

function loadLDocA() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarFicheroXMLV2(this);
        }
    };
    xhr.open("GET", "./xml/libros.xml", true);
    xhr.send();
}
function gestionarFicheroXMLV2(xml){
    let docXML=xml.responseXML;
    let campos = " ";
    let minimos=precioMenor(xml);
    let divCelda="";

    for(let i=0;i<docXML.getElementsByTagName("libreria").length;i++){
        campos += "<div class='table'>"
        campos += "<div class='tc'>"
        campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("nombre")[0].textContent;
        campos += "</div>"
        campos += "<div class='tr'><div class='th'>ISBN</div><div class='th'>Título</div>"
            + "<div class='th'>Nivel Profundidad</div><div class='th'>Autor</div>"
            + "<div class='th'>Editorial</div><div class='th'>Fecha Publicacion</div>"
            + "<div class='th'>Página Web</div><div class='th'>Precio</div></div>"
        for(let j=0;j<docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro").length;j++){
            if(minimos[i]==Number(docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent))
                divCelda ="<div class='tdMenor'>";
            else
                divCelda="<div class='td'>";
            campos += "<div class='tr'>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("ISBN")[0].textContent;
            campos += "</div>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("titulo")[0].textContent;
            campos += "</div>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("nivelProfundidad")[0].textContent;
            campos += "</div>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("autor")[0].textContent;
            campos += "</div>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("editorial")[0].textContent;
            campos += "</div>" + divCelda;
            campos +=docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("fechaPublicacion")[0].textContent;
            campos += "</div>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("paginaWeb")[0].textContent;
            campos += "</div>" + divCelda;
            campos += docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent;
            campos += "</div></div>"
        }
        campos += "</div>" 
        
    }
    document.getElementById("ficheroXML").innerHTML = campos;

    precioMenor(xml);
}

function precioMenor(xml)
{
    let docXML=xml.responseXML;
    let minimo;
    let minimos = new Array();
    
    for(let i=0;i<docXML.getElementsByTagName("libreria").length;i++){
        for(let j=0;j<docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro").length;j++){
            if(j==0)
                minimo=Number(docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent);
            else{
                let valor = Number(docXML.getElementsByTagName("libreria")[i].getElementsByTagName("libro")[j].getElementsByTagName("precio")[0].textContent);
                
                if(minimo > valor){
                    minimo = valor;                    
                }
            }                           
        }
        minimos.push(minimo);        
    }
    return minimos;    
}


