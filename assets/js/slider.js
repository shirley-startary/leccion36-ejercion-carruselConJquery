var carrusel=$("#carrusel");
// almacenar botones
var siguiente =$("#btn-next");
var anterior =$("#btn-prev");
// mover ultima imagen al primer lugar
$("#carrusel section:last").insertBefore("#carrusel section:first");
// postrar la primer imagen con un margen del  -100%
carrusel.css("margin-left","-"+100+"%");

function moverDerecha(){
  carrusel.animate({
    marginleft:"-"+200+"%"
}   ,700, function () {
    $("#carrusel section:first").insertAfter("#carrusel section:last");
    carrusel.css("margin-left","-"+100+"%");

});
}
function moverIzquierda(){
  carrusel.animate({
    marginleft:0
}   ,700, function () {
    $("#carrusel section:last").insertBefore("#carrusel section:first");
    carrusel.css("margin-left","-"+100+"%");

});
}
siguiente.on("click",function(){
   moverDerecha();
});
anterior.on("click",function(){
   moverIzquierda();
});

function autoplay(){
  interval = setInterval(function(){
    moverDerecha();

  },3000);
}
autoplay();
