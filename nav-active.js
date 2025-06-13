document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links li a');

  navLinks.forEach(link => {
    // Remove active class from all links
    link.classList.remove('active');

    // Get href path from link
    const linkPath = new URL(link.href).pathname;

    // Compare with current path
    if (linkPath === currentPath || (linkPath === '/' && currentPath === '/index.html')) {
      link.classList.add('active');
    }
  });
});
