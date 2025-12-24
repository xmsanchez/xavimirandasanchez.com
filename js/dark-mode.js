(function() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  const html = document.documentElement;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function setTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
  }

  toggle.addEventListener('click', function() {
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });

  // Initialize icons on page load
  const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(currentTheme);
})();

