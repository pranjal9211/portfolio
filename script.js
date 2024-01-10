
var typed = new Typed('#element', {
    strings: ['.........','coding','cooking','coding','cooking','coding','cooking','coding'],
    typeSpeed: 50,
  });

const progressBarElements = document.querySelectorAll('.skills-progressbar');
progressBarElements.forEach(progressBar => {
  const percentage = progressBar.getAttribute('data-percentage');
    progressBar.style.setProperty('--percentage', percentage);
});

window.onscroll = function () {
  var navbar = document.querySelector("nav");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

