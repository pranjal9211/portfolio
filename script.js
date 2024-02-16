var typed = new Typed('#element', {
    strings: ['.........','coding','cooking','coding','cooking','coding','cooking','coding'],
    typeSpeed: 50,
  });


const progressBarElements = document.querySelectorAll('.skills-progressbar');
progressBarElements.forEach(progressBar => {
  const percentage = progressBar.getAttribute('data-percentage');
    progressBar.style.setProperty('--percentage', percentage);
});
