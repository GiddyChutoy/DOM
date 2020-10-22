function focoNombre(){
    document.getElementById("nombre").focus();
}

function noFocoNombre(){
    document.getElementById("nombre").blur();
}

function anadirH2(){
    let texto = document.createTextNode("Lorem Ipsum de nuevo");
    let element = document.createElement("h2").appendChild(texto);
    document.getElementById("seccionTercera").insertBefore(element, document.getElementById("seccionTercera").firstElementChild);
}

function moverParrafo(){
    let element = document.getElementById("seccionPrimera").lastElementChild;
    document.getElementById("seccionTercera").insertBefore(element, document.getElementById("seccionTercera").firstElementChild);
}

function crearDiv(){
    let suputamadre = document.createElement("div")
    let gafassubnormal = document.getElementById("seccionLista").cloneNode(true);
    suputamadre.appendChild(gafassubnormal);
    document.getElementById("seccionSegunda").after(suputamadre);
}

function eliminar(){
    let lista = document.getElementsByTagName("ul");
    lista[1].removeChild(lista[1].lastChild)
}

function desaparecer(){
    let parrafo2 = document.querySelectorAll("p")[1];
    let parrafo5 = document.querySelectorAll("p")[4];
    if(parrafo2.hasAttribute("hidden") == false){
        parrafo2.setAttribute("hidden", "true");
    }else{
        parrafo2.removeAttribute("hidden");
    }

    if(parrafo5.hasAttribute("hidden") == false){
        parrafo5.setAttribute("hidden", "true");
    }else{
        parrafo5.removeAttribute("hidden");
    }

    let input1 = document.querySelectorAll("input[type=text]")[0];
    let input2 = document.querySelectorAll("input[type=text]")[1];
    let input3 = document.querySelectorAll("input[type=text]")[2];
    input1.size = input1.size + 5;
    input2.size = input2.size + 5;
    input3.size = input3.size + 5;
}

function genero(){
    input1 = document.querySelectorAll("input[type=radio]");
    input2 = document.querySelectorAll("input[type=radio]");
    input1[0].removeAttribute("name");
    input2[1].removeAttribute("name");
}

 function meterGenero(){
    input1 = document.querySelectorAll("input[type=radio]");
    input2 = document.querySelectorAll("input[type=radio]");
    input1[0].setAttribute("name", "chocho");
    input2[1].setAttribute("name", "pene");
 }

