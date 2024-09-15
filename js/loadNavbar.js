//This is the loadNavbar.js file.
document.addEventListener('DOMContentLoaded', () => {
  fetch('/components/nav.html') // Adjust the path if necessary
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          const navbarPlaceholder = document.getElementById('navbar-placeholder');
          navbarPlaceholder.innerHTML = data;

          // Initialize the navbar after it's loaded
          initializeNavbar();
      })
      .catch(error => {
          console.error('Error loading nav bar:', error);
      });
});

function initializeNavbar() {
  const navLinks = document.querySelectorAll('.nav-link');
  const logo = document.querySelector('.logo');
  let currentPath = window.location.pathname;

  // Normalize paths by removing trailing slashes
  if (currentPath.endsWith('/') && currentPath.length > 1) {
      currentPath = currentPath.slice(0, -1);
  }
  // Add 'active' class to the logo if we're on the index page
  if (currentPath === '/index.html' || currentPath === '/') {
      if (logo) {
          logo.classList.add('active');
      } else {
          console.error('Logo element not found.');
      }
  }

  // Loop through nav links and add 'active' class based on the current path
  navLinks.forEach(link => {
      let linkPath = link.getAttribute('href');

      // Ignore external links and normalize paths
      if (linkPath.startsWith('http')) {
          return;
      }
      if (linkPath.endsWith('/') && linkPath.length > 1) {
          linkPath = linkPath.slice(0, -1);
      }

      if (linkPath === currentPath) {
          link.classList.add('active');
      }
  });
}
