/*
 * Animaciones y Flowtype
 */

// Flowtype
$('.flowText').flowtype({minFont : 16, maxFont : 21.5 });

// Animacion Fade In
TweenMax.staggerFrom('.fadeInBottom', 1, {position: 'relative', bottom: -30, autoAlpha: 0, ease: Sine.easeIn, delay: .5}, 0.2);
TweenMax.staggerFrom('.fadeInTop', 0.5, {position: 'relative', top: -15, autoAlpha: 0, ease: Sine.easeIn, delay: .5}, 0.2);
TweenMax.staggerFrom('.fadeInLeft', 1, {position: 'relative', rotationY: 90, left: -50, autoAlpha: 0, ease: Sine.easeIn, delay: .5}, 0.2);
TweenMax.staggerFrom('.fadeInRight', 1, {position: 'relative', rotationY: -90, right: -50, autoAlpha: 0, ease: Sine.easeIn, delay: .5}, 0.2);

// Animación Links
/*$('.socialItem').hover(
  function(e) {
    TweenMax.to($(this).find('.socialLink'), 2, {rotationY:360, ease:Back.easeOut});
  },
  function(e) {
    TweenMax.to($(this).find('.socialLink'), 1, {rotationY:0, ease:Back.easeOut});
  }
);*/

$('#slider').nivoSlider();

$('.color').click(function(e){
    var color = $(this).css('background-color');
    $('#hasParticles').css('background-color', color);
});

/*$('#stepper').change(function(e){
  var bg = "url('../images/fondos/"+$(this).val()+".jpg')";
  $('html').css('background-image', bg);
});
*/

// Solzinho
TweenMax.fromTo('.header-image', .5, {rotation:"5deg", ease:Linear.easeNone },{rotation:"-5deg", ease:Linear.easeNone, yoyo:true, repeat: -1 });