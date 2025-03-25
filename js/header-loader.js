document.addEventListener('DOMContentLoaded', function () {
  // Load the header content
  fetch('header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header-container').innerHTML = data;

      // Set active link based on current page
      const currentPage =
        window.location.pathname.split('/').pop().split('.')[0] || 'index';
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach((link) => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch((error) => {
      console.error('Error loading header:', error);
    });
});
