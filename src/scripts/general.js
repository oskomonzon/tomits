/*
 * Animaciones y Flowtype
 */

// Flowtype
$('.flowText').flowtype({minFont : 16, maxFont : 26 });

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