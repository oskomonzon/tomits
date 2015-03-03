/*
 * Animaciones y Flowtype
 */

// Flowtype
$('.container').flowtype({minFont : 16});

// Animacion Fade In
TweenMax.staggerFrom('.fadeInBottom', 0.5, {position: 'relative', bottom: -15, autoAlpha: 0, ease: Sine.easeIn, delay: .5}, 0.2);
TweenMax.staggerFrom('.fadeInTop', 0.5, {position: 'relative', top: -15, autoAlpha: 0, ease: Sine.easeIn, delay: .5}, 0.2);

// Animación Links
$('.socialItem').hover(
  function(e) {
    TweenMax.to($(this).find('.socialLink'), 2, {rotationY:360, ease:Back.easeOut});
  },
  function(e) {
    TweenMax.to($(this).find('.socialLink'), 1, {rotationY:0, ease:Back.easeOut});
  }
);google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(-36.6796028,-56.68836679999998),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('googleMap');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['OskO', 'undefined', '+54 2257 52 33 67', 'gmail@osko.com.ar', 'www.osko.com.ar', -36.6796028, -56.68836679999998, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png']
        ];
        for (i = 0; i < locations.length; i++) {
              if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
              if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
              if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
              if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
              if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
              marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
if (web.substring(0, 7) != "http://") {
link = "http://" + web;
} else {
link = web;
}
            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}
/**
 * main.js
 * Todo el javascript del directorio 'scripts' va a ser concatenado y minimizado en 'build/scripts/main.min.js'.
 * El javascript de la carpeta 'vendor' va a ser copiado 'build/scripts/vendor/' sin modificaciones.
 *//*
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
                { backgroundColor:"hsl(" + random(60,100) + ", 50%, 50%)",
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
