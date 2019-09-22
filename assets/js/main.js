//Smooth Scrolling
$('a[href*=\\#]').on('click', function (event) {
   event.preventDefault();
   $('html,body').animate({
      scrollTop: $(this.hash).offset().top
   }, 500);
});

//Scroll Animation
window.sr = ScrollReveal();
sr.reveal('.top-animation', {
   duration: 2000,
   origin: 'top',
   distance: '100px',
});
sr.reveal('.left-animation', {
   duration: 2000,
   origin: 'left',
   distance: '100px',
});
sr.reveal('.right-animation', {
   duration: 2000,
   origin: 'right',
   distance: '0px',
});
sr.reveal('.bottom-animation', {
   duration: 3000,
   origin: 'bottom',
   distance: '100px',
});