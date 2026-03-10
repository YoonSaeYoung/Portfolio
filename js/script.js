/* ==================================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
   ==================================================
   Interactive features and smooth functionality
   ================================================== */

/* ==================== 
   NAVIGATION & SCROLL
   ==================== */

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

/* ==================== 
   SMOOTH SCROLL
   ==================== */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* ==================== 
   CONTACT FORM
   ==================== */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill out all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // PLACEHOLDER: You need to connect this to a backend service
        // Options:
        // 1. Formspree (https://formspree.io/)
        // 2. EmailJS (https://www.emailjs.com/)
        // 3. Your own backend API
        // 4. Discord webhook

        // For now, show a success message
        showNotification(
            'Thank you for your message! You can also reach me at your.email@example.com',
            'success'
        );

        // Reset form
        contactForm.reset();

        /* EXAMPLE: If using Formspree, uncomment below and update the form action
        
        // Formspree Example:
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } else {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('An error occurred. Please try again.', 'error');
        });
        
        */

        /* EXAMPLE: If using EmailJS, uncomment below
        
        // EmailJS Example:
        emailjs.init('YOUR_PUBLIC_KEY');
        
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(response => {
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        });
        
        */
    });
}

// Notification function for form feedback
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        z-index: 2000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        animation: slideInNotification 0.3s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;

    document.body.appendChild(notification);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

/* ==================== 
   ANIMATION STYLES (added via JavaScript)
   ==================== */

// Add notification animation styles to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInNotification {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutNotification {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ==================== 
   INTERSECTION OBSERVER FOR ANIMATIONS
   ==================== */

// Animate elements as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all section content elements
document.querySelectorAll('.section-header, .project-card, .skill-category, .timeline-item, .education-item, .award-card, .hobby-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

/* ==================== 
   UTILITY FUNCTIONS
   ==================== */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* ==================== 
   PAGE LOAD ANIMATIONS
   ==================== */

// Add animation to hero section on page load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

/* ==================== 
   LOCAL STORAGE FOR PREFERENCES
   ==================== */

// Save user preferences (optional enhancement)
function savePreference(key, value) {
    try {
        localStorage.setItem(`portfolio_${key}`, JSON.stringify(value));
    } catch (err) {
        console.log('LocalStorage not available');
    }
}

function getPreference(key) {
    try {
        const value = localStorage.getItem(`portfolio_${key}`);
        return value ? JSON.parse(value) : null;
    } catch (err) {
        console.log('LocalStorage not available');
        return null;
    }
}

/* ==================== 
   EXTERNAL SERVICE INTEGRATIONS (TEMPLATES)
   ==================== */

/*
PLACEHOLDER: Integration Examples

1. GOOGLE ANALYTICS
   Add this to your HTML <head>:
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>

2. FORMSPREE (Form Submission)
   Update the contact form action:
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

3. EMAILJS (Email Service)
   Add to <head>:
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
   Then initialize in JavaScript

4. GOOGLE FONTS
   Already included via system fonts, but you can add custom fonts:
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet">

5. FONT AWESOME ICONS
   Add to <head>:
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
*/

/* ==================== 
   DEBUG MODE
   ==================== */

// Enable debug mode for development
const DEBUG_MODE = false;

function debugLog(message, data = null) {
    if (DEBUG_MODE) {
        console.log(`[Portfolio Debug] ${message}`, data || '');
    }
}

debugLog('Portfolio JavaScript loaded successfully');

/* ==================== 
   DOCUMENT READY
   ==================== */

// Initial setup when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}

function initializePortfolio() {
    debugLog('Portfolio initialized');
    
    // Initialize any other features here
    updateActiveNavLink();
    
    // Add smooth scroll class to body for CSS transitions
    document.body.classList.add('portfolio-ready');
}
