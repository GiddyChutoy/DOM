window.onload = function() {
    document.getElementsByTagName("h1")[0].addEventListener("mouseover", eliminar, false);
    document.getElementsByTagName("h2")[0].addEventListener("click", desaparecer, false);
    document.getElementsByTagName("p")[3].addEventListener("click", moverParrafo, false);
    document.getElementById("segundoH2").addEventListener("click", crearDiv, false);
    document.getElementById("tercerH2").addEventListener("mouseover", meterGenero, false);
    document.getElementById("sexo").addEventListener("mouseover", genero, false);
    document.getElementById("boton1").addEventListener("click", focoNombre, false);
    document.getElementById("boton2").addEventListener("click", noFocoNombre, false);
    document.getElementById("ultimoParrafo").addEventListener("click", anadirH2, false);

    //No funciona hay que mirarlo
    if (document.getElementById("destacado").style.color == "") {
        document.getElementsByTagName("p")[0].addEventListener("dblclick", cambiarColorRojo, false);
    } else if (document.getElementById("destacado").style.color == "red") {
        document.getElementsByTagName("p")[0].addEventListener("dblclick", cambiarColorNegro, false);
    } else {
        document.getElementsByTagName("p")[0].addEventListener("dblclick", cambiarColorNegro, false)
    }
}