function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();
