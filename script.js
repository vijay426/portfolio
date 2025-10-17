// Smooth scroll and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Matrix Rain Effect
    function initMatrixRain() {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let x = 0; x < columns; x++) {
            drops[x] = Math.random() * canvas.height;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F3';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 80);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    initMatrixRain();
    
    // Magnetic Cursor Effect
    function initMagneticCursor() {
        const cursor = document.querySelector('.magnetic-cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });
        
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            
            requestAnimationFrame(animateRing);
        }
        
        animateRing();
        
        // Magnetic attraction to interactive elements
        const magneticElements = document.querySelectorAll('.btn, .nav-link, .project-card, .skill-item');
        
        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorRing.classList.add('active');
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursorRing.classList.remove('active');
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
    
    initMagneticCursor();
    
    // Floating Code Snippets
    function createFloatingCode() {
        const codeSnippets = [
            'function()', '{ }', 'React.js', 'Node.js', 'const =>', 'async/await',
            'MongoDB', 'Cypress', 'JavaScript', 'HTML5', 'CSS3', 'API',
            'console.log()', 'return true;', '&lt;/&gt;', 'SQL', 'Git',
            'TypeScript', 'JSON', 'REST', 'npm', 'webpack'
        ];
        
        function createCodeElement() {
            const code = document.createElement('div');
            code.className = 'floating-code';
            code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            code.style.cssText = `
                position: fixed;
                font-family: 'Courier New', monospace;
                font-size: ${10 + Math.random() * 6}px;
                color: rgba(102, 126, 234, 0.3);
                pointer-events: none;
                z-index: 2;
                left: ${Math.random() * window.innerWidth}px;
                top: 100vh;
                animation: floatUp ${20 + Math.random() * 15}s linear infinite;
                text-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
            `;
            
            document.body.appendChild(code);
            
            setTimeout(() => {
                code.remove();
            }, 35000);
        }
        
        setInterval(createCodeElement, 6000);
    }
    
    createFloatingCode();
    
    // Add CSS for floating code animation
    const codeStyles = document.createElement('style');
    codeStyles.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(codeStyles);
    
    // 3D Scroll Transformations
    function init3DScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
                    entry.target.style.opacity = '1';
                } else {
                    entry.target.style.transform = 'translateY(50px) rotateX(15deg) rotateY(5deg) scale(0.9)';
                    entry.target.style.opacity = '0.5';
                }
            });
        }, { threshold: 0.1 });
        
        const elements3D = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .stat-item');
        elements3D.forEach(el => {
            el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(el);
        });
    }
    
    init3DScrollEffects();
    
    // Parallax scrolling for sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
    
    // Add more refined animation styles
    const refinedStyles = document.createElement('style');
    refinedStyles.textContent = `
        
        .skill-progress {
            position: relative;
            overflow: hidden;
        }
        
        .skill-progress::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            animation: skillShine 2s infinite;
        }
        
        @keyframes skillShine {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        .award-card {
            position: relative;
            overflow: hidden;
        }
        
        .award-card:hover {
            transform: translateY(-5px);
        }
    `;
    document.head.appendChild(refinedStyles);
    // Loading screen
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);

    window.addEventListener('load', function() {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    });

    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Typing animation for hero subtitle
    const typingText = document.querySelector('.typing-text');
    const phrases = [
        'Software Development Engineer',
        'React.js Developer',
        'Full Stack Developer',
        'Frontend Specialist',
        'Cypress Test Engineer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(typeText, typingSpeed);
    }

    typeText();

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill bars when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                
                // Animate stats when about section is visible
                if (entry.target.classList.contains('about')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Add animate-on-scroll class to elements
    const elementsToAnimate = document.querySelectorAll('.section-title, .about-text, .about-image, .skills-category, .timeline-item, .project-card, .contact-info, .form');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Observe sections for skill bar animation
    observer.observe(document.querySelector('.skills'));
    observer.observe(document.querySelector('.about'));

    // Skill bar animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            setTimeout(() => {
                bar.style.width = percentage + '%';
            }, 300);
        });
    }

    // Stats counter animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : stat.textContent.includes('%') ? '%' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : stat.textContent.includes('%') ? '%' : '');
                }
            };
            
            updateCounter();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show success message (you can integrate with actual email service)
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(45deg, #4CAF50, #45a049)' : 'linear-gradient(45deg, #667eea, #764ba2)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Add CSS for notification animations
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(notificationStyles);

    // Particle background for hero section
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
        `;
        
        hero.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(102, 126, 234, 0.5);
                border-radius: 50%;
                animation: float ${5 + Math.random() * 10}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Add particle animation CSS
    const particleStyles = document.createElement('style');
    particleStyles.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyles);
    
    createParticles();

    // Tilt effect for cards
    function addTiltEffect() {
        const cards = document.querySelectorAll('.project-card, .stat-item, .contact-item');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }
    
    addTiltEffect();

    // Cursor trail effect
    function createCursorTrail() {
        const trail = [];
        const trailLength = 10;
        
        for (let i = 0; i < trailLength; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-trail';
            dot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(102, 126, 234, ${0.8 - i * 0.08});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(dot);
            trail.push(dot);
        }
        
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateTrail() {
            let x = mouseX, y = mouseY;
            
            trail.forEach((dot, index) => {
                const nextDot = trail[index + 1] || trail[0];
                
                dot.style.left = x + 'px';
                dot.style.top = y + 'px';
                
                if (nextDot) {
                    x += (parseInt(nextDot.style.left) - x) * 0.3;
                    y += (parseInt(nextDot.style.top) - y) * 0.3;
                }
            });
            
            requestAnimationFrame(animateTrail);
        }
        
        animateTrail();
    }
    
    // Only add cursor trail on desktop
    if (window.innerWidth > 768) {
        createCursorTrail();
    }

    // Theme toggle functionality (optional)
    function addThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        `;
        
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = themeToggle.querySelector('i');
            icon.className = document.body.classList.contains('light-theme') ? 'fas fa-sun' : 'fas fa-moon';
        });
        
        themeToggle.addEventListener('mouseenter', () => {
            themeToggle.style.transform = 'scale(1.1)';
        });
        
        themeToggle.addEventListener('mouseleave', () => {
            themeToggle.style.transform = 'scale(1)';
        });
    }
    
    addThemeToggle();

    // Add light theme styles
    const lightThemeStyles = document.createElement('style');
    lightThemeStyles.textContent = `
        .light-theme {
            color: #333 !important;
        }
        
        .light-theme .hero,
        .light-theme .about,
        .light-theme .skills,
        .light-theme .experience,
        .light-theme .projects,
        .light-theme .contact {
            background: #f8f9fa !important;
        }
        
        .light-theme .section-title,
        .light-theme .hero-title,
        .light-theme .timeline-title,
        .light-theme .project-title,
        .light-theme .about-text h3,
        .light-theme .contact-info h3 {
            color: #333 !important;
        }
        
        .light-theme .hero-description,
        .light-theme .about-text p,
        .light-theme .timeline-description,
        .light-theme .project-description,
        .light-theme .contact-info p {
            color: #666 !important;
        }
    `;
    document.head.appendChild(lightThemeStyles);

    console.log('Portfolio website loaded successfully! 🚀');
});