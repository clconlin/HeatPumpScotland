// ===== MOBILE NAVIGATION TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            // Toggle hamburger animation
            navToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ===== CONTACT FORM VALIDATION =====
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const postcode = document.getElementById('postcode');
            const service = document.getElementById('service');
            let valid = true;

            // Clear previous errors
            document.querySelectorAll('.form-error').forEach(function (el) {
                el.remove();
            });

            // Reset border colours
            document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(function (el) {
                el.style.borderColor = '';
            });

            // Validate name
            if (!name.value.trim()) {
                showError(name, 'Please enter your name');
                valid = false;
            }

            // Validate email
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                valid = false;
            }

            // Validate postcode
            if (!postcode.value.trim()) {
                showError(postcode, 'Please enter your postcode');
                valid = false;
            }

            // Validate service selection
            if (!service.value) {
                showError(service, 'Please select a service');
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }

    function showError(input, message) {
        const error = document.createElement('span');
        error.className = 'form-error';
        error.textContent = message;
        error.style.color = '#e53e3e';
        error.style.fontSize = '0.85rem';
        error.style.marginTop = '4px';
        input.parentNode.appendChild(error);
        input.style.borderColor = '#e53e3e';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});