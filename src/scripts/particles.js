/*
 * Animación de Particulas con Greensock
 */

// Variables
var total = 75;
var w = $("#hasParticles").width();
//var h = $("html").height()-$(".header").height();
var h = $("#hasParticles").height();

// Inyección de puntos
function showpanel() {
  for (i=0; i<total; i++){
    $("#hasParticles").append('<div class="particle"></div>')
    TweenMax.set($(".particle")[i],
                  { backgroundColor: "rgba(255,255,255,"+random(0.1,0.3)+")",
                  //{ backgroundColor:"hsl(" + random(180,360) + ", 50%, 50%)",
                    //opacity:random(0.1,0.3),
                    scale:Random(0.75)+0.25,
                    x:Random(w),
                    y:h
                    //y:random(-500,-100)
                  });
    animar($(".particle")[i]);
  }
 }
setTimeout(showpanel, 3000);
 
// Animaciones
function animar(element){
  TweenMax.to(element, Random(20)+20, {y:0, ease:Linear.easeNone, repeat:-1, delay:-5});
  TweenMax.to(element, Random(15)+10, {x:'+=70', repeat:-1, yoyo:true, ease:Sine.easeInOut})
  TweenMax.to(element, Random(10)+5, {opacity:0, repeat:-1, yoyo:true, ease:Sine.easeInOut})
};

// Helpers
function Random(max) {
  return Math.random() * max;
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}
