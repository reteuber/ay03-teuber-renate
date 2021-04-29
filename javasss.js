$(document).ready(function(){
    var boton1 = $(".boton1");
    var boton2 = $(".boton2");
    var boton3 = $(".boton3");
    var color = $(".destacado");


    boton1.click(function(){
        $(".titulo").fadeTo("fast",0);
    });

    boton2.click(function(){
        $(".titulo").fadeTo("fast",1);
    });   

    boton3.click(function(){
        $("#p1").text("A cuidarlos mucho mientras esten con nosotros");
    }); 

    color.mouseenter(function(){

        $(this).css("background","blue");

    });





});