var typed = new Typed('#element', {
    strings: ['.........','coding','cooking','coding','cooking','coding','cooking','coding'],
    typeSpeed: 50,
  });


const progressBarElements = document.querySelectorAll('.skills-progressbar');
progressBarElements.forEach(progressBar => {
  const percentage = progressBar.getAttribute('data-percentage');
    progressBar.style.setProperty('--percentage', percentage);
});


$(document).ready(function () {
  // Smooth scrolling for all anchor links
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {
        window.location.hash = hash;
      });
    }
  });
});