/*
 * Animación de Particulas con Greensock
 */

// Variables
var total = 35;
var w = $("#hasParticles").width();
var h = $("#hasParticles").height();

// Inyección de puntos
for (i=0; i<total; i++){
  $("#hasParticles").append('<div class="particle"></div>')
  TweenMax.set($(".particle")[i],
                { backgroundColor:"hsl(" + random(180,360) + ", 50%, 50%)",
                  opacity:0.75,
                  scale:Random(0.75)+0.25,
                  x:Random(w),
                  y:random(-500,-100)
                });
  animar($(".particle")[i]);
}

// Animaciones
function animar(element){
  TweenMax.to(element, Random(20)+10, {y:h, ease:Linear.easeNone, repeat:-1, delay:-5});
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
