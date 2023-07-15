var toggleBtn = document.querySelector('.toggle-button');
var navbarLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});