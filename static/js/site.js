(function() {
  var root = document.documentElement;

  // Dark mode toggle
  var themeToggle = document.getElementById('dark-mode-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var dark = root.classList.toggle('dark');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      var giscus = document.querySelector('iframe.giscus-frame');
      if (giscus) {
        giscus.contentWindow.postMessage(
          { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
          'https://giscus.app'
        );
      }
    });
  }

  // Mobile menu
  var menuToggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (menuToggle && menu) {
    var setMenu = function(open) {
      menu.classList.toggle('hidden', !open);
      menuToggle.setAttribute('aria-expanded', String(open));
    };
    menuToggle.addEventListener('click', function() {
      setMenu(menu.classList.contains('hidden'));
    });
    menu.addEventListener('click', function(e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // Scroll animations (content is only hidden when JS is running, see the .js class)
  var targets = document.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    targets.forEach(function(el) { observer.observe(el); });
  } else {
    targets.forEach(function(el) { el.classList.add('visible'); });
  }

  // Giscus comments, loaded when scrolled into view with the current theme
  var comments = document.getElementById('comments');
  if (comments) {
    var loadComments = function() {
      var script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      Object.keys(comments.dataset).forEach(function(key) {
        if (key.indexOf('giscus') === 0) {
          var name = key.slice(6).replace(/[A-Z]/g, function(c) { return '-' + c.toLowerCase(); }).slice(1);
          script.setAttribute('data-' + name, comments.dataset[key]);
        }
      });
      script.setAttribute('data-theme', root.classList.contains('dark') ? 'dark' : 'light');
      comments.appendChild(script);
    };
    if ('IntersectionObserver' in window) {
      var commentsObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          commentsObserver.disconnect();
          loadComments();
        }
      }, { rootMargin: '300px' });
      commentsObserver.observe(comments);
    } else {
      loadComments();
    }
  }
})();
