const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animate-class");
hiddenElements.forEach((el) => observer.observe(el));




window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  // When the scroll is more than 50px, add the "scrolled" class
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
