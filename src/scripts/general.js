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
);