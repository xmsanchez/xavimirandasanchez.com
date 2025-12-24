(function() {
  // Intersection Observer for scroll animations
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right');
    elementsToAnimate.forEach(function(element) {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right');
    elementsToAnimate.forEach(function(element) {
      element.classList.add('visible');
    });
  }
})();

