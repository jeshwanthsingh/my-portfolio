        // Matrix effect for background
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}/*-+.~';
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#64ffda';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        setInterval(drawMatrix, 50);

        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');

        function checkScroll() {
            fadeElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top <= windowHeight * 0.85) {
                    el.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
       // More robust smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Check if the target element exists
        if (!targetId || targetId === "#") return;
        
        try {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            // Get the height of your navbar
            const navHeight = document.querySelector('nav').offsetHeight || 80;
            
            // Calculate the position to scroll to
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            // Perform the scroll
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
            }
          } else {
            console.error(`Element with id ${targetId} not found`);
          }
        } catch (error) {
          console.error(`Error scrolling to ${targetId}:`, error);
        }
      });
    });
  });
