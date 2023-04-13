console.log("hola mundo");

function validar(){

    // para uno solo se pone querySelector
    var capa = document.querySelectorAll(".capa2");
    console.log("capa1", capa);
    //capa.style.color ='red';
    for(var i = 0; i < capa.length; i++){
        capa[i].style.color ='red';
    }
}