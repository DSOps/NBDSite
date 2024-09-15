//Review this code to understand how it works. It was originally used to indicate which nav bar component was active on each html page, when the nav bar was coded on every page. I have since created the loadNavbar.js script which is called by all pages where the navbar is needed. In that script it also handles the active nav bar component and thus the code below is no longer needed.

// This is the script.js file.
// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-link');
//     const logo = document.querySelector('.logo');
//     const currentPage = window.location.pathname.split('/').pop();

    // // Add 'active' class to the logo if we're on the index page
    // if (currentPage === 'index.html' || currentPage === '') {
    //     logo.classList.add('active');
    // }

//     // Loop through nav links and add 'active' class based on the current page
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === currentPage) {
//             link.classList.add('active');
//         }
//     });
// });


