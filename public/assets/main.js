// Mobile Menu Functionality
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    if (mobileToggle && sidebar) {
        // Crear overlay dinámicamente
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
        
        // Toggle menu
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-open');
            body.classList.toggle('menu-open');
            overlay.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en overlay
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('mobile-open');
            body.classList.remove('menu-open');
            overlay.classList.remove('active');
        });
        
        // Cerrar menú al hacer clic en un enlace (opcional)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('mobile-open');
                    body.classList.remove('menu-open');
                    overlay.classList.remove('active');
                }
            });
        });
    }
}

let currentLanguage = 'es'; // Idioma por defecto

// Función para cambiar el idioma
function changeLanguage(lang) {

    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Actualizar el toggle
    document.getElementById('language-toggle').checked = lang === 'en';
    
    // Actualizar las opciones de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Traducir todo el contenido
    translateContent();
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Función para traducir el contenido
function translateContent() {
    const translations = {
      es: {
          // Navegación
        home: "Inicio",
        about: "Sobre Mí",
        services: "Servicios",
        projects: "Proyectos",
        contact: "Contacto",
        
        // Hero Section
        heroTitle: `<span class="text-gradient">Innovación</span> y <span class="text-gradient">Tecnología</span> <span>para el Futuro</span>`,
        heroSubtitle: "Desarrollador Full Stack especializado en soluciones web de alto rendimiento.",
        viewProjects: "Ver Proyectos",
        contactMe: "Contactar",
        
        // Skills Section
        skillsTitle: "Habilidades Principales",
        
        // Projects Section
        projectsTitle: "Mis Proyectos",
        projectsSubtitle: "Explora mis trabajos más recientes y destacados",
        visit: "Visitar",
        repository: "Repositorio",
        project1Title: "Plataforma E-commerce",
        project1Desc: "Solución completa de comercio electrónico con panel de administración.",
        project2Title: "Plataforma de servicios",
        project2Desc: "Aplicación web que conecta clientes con profesionales.",
        project3Title: "E-commerce crypto",
        project3Desc: "Web para la compra/venta de activos sobre proyectos con rentabilidad.",
        interestedInProject: "¿Interesado en trabajar juntos en tu próximo proyecto?",
        
        // About Section
        aboutTitle: "Sobre Mí",
        aboutDescription: "Soy un apasionado desarrollador full stack con más de 4 años de experiencia creando soluciones digitales innovadoras. Mi enfoque combina diseño estético con funcionalidad robusta para ofrecer experiencias de usuario excepcionales.",
        mySkills: "Mis Habilidades",
        webDevelopment: "Comunicacion asertiva",
        uiUxDesign: "Trabajo en equipo",
        database: "Pensamiento crítico",
        devops: "Gestión del tiempo",
        adaptabilidad: "Adaptabilidad",
        fullstackDev: "Desarrollador Full Stack",
        freelanceDev: "Desarrollador Freelance",
        workingWithClients: "Trabajo con clientes independientes.",
        spainRemote: "España (remoto)",
        present: "Presente",
        
        // Services Section
        servicesTitle: "Mis Servicios",
        webDevelopmentService: "Desarrollo Web",
        webDevelopmentDesc: "Sitios web personalizados, optimizados para rendimiento y SEO, con las últimas tecnologías.",
        mobileApps: "Aplicaciones Móviles",
        mobileAppsDesc: "Apps nativas e híbridas para iOS y Android, con interfaces intuitivas y excelente UX.",
        backendApis: "Backend & APIs",
        backendApisDesc: "Desarrollo de APIs robustas y escalables con arquitecturas modernas y seguras.",
        
        // Contact Section
        contactTitle: "Contacta Conmigo",
        contactDescription: "¿Tienes un proyecto en mente? Envíame un mensaje y hablemos sobre cómo puedo ayudarte a hacerlo realidad.",
        nameLabel: "Nombre",
        emailLabel: "Correo Electrónico",
        subjectLabel: "Asunto",
        messageLabel: "Mensaje",
        sendMessage: "Enviar Mensaje",
        
        // Timeline
        timeline1Date: "2024 - Presente",
        timeline2Date: "2021 - Presente"
      },
      en: {
          // Navigation
        home: "Home",
        about: "About Me",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        
        // Hero Section
        heroTitle: `<span class="text-gradient">Innovation</span> and <span class="text-gradient">Technology</span> <span>for the Future</span>`,
        heroSubtitle: "Full Stack Developer specialized in high-performance web solutions.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        
        // Skills Section
        skillsTitle: "Main Skills",
        
        // Projects Section
        projectsTitle: "My Projects",
        projectsSubtitle: "Explore my most recent and outstanding works",
        visit: "Visit",
        repository: "Repository",
        project1Title: "E-commerce Platform",
        project1Desc: "Complete e-commerce solution with admin panel.",
        project2Title: "Services Platform",
        project2Desc: "Web application that connects customers with professionals.",
        project3Title: "E-commerce crypto",
        project3Desc: "Web for buying and selling assets tied to profitable projects.",
        interestedInProject: "Interested in working together on your next project?",
        
        // About Section
        aboutTitle: "About Me",
        aboutDescription: "I'm a passionate full stack developer with over 4 years of experience creating innovative digital solutions. My approach combines aesthetic design with robust functionality to deliver exceptional user experiences.",
        mySkills: "My Skills",
        webDevelopment: "Assertive Communication",
        uiUxDesign: "Teamwork",
        database: "Critical Thinking",
        devops: "Time Management",
        adaptabilidad: "Adaptability",
        adaptableDesign: "Adaptive Design",
        fullstackDev: "Full Stack Developer",
        freelanceDev: "Freelance Developer",
        workingWithClients: "Working with independent clients.",
        spainRemote: "Spain (remote)",
        present: "Present",
        
        // Services Section
        servicesTitle: "My Services",
        webDevelopmentService: "Web Development",
        webDevelopmentDesc: "Custom websites, optimized for performance and SEO, with the latest technologies.",
        mobileApps: "Mobile Applications",
        mobileAppsDesc: "Native and hybrid apps for iOS and Android, with intuitive interfaces and excellent UX.",
        backendApis: "Backend & APIs",
        backendApisDesc: "Development of robust and scalable APIs with modern and secure architectures.",
        
        // Contact Section
        contactTitle: "Contact Me",
        contactDescription: "Do you have a project in mind? Send me a message and let's talk about how I can help you make it a reality.",
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        sendMessage: "Send Message",
        
        // Timeline
        timeline1Date: "2024 - Present",
        timeline2Date: "2021 - Present"
      }
  };
    const lang = translations[currentLanguage];
    
    // Sidebar
    document.querySelectorAll('.link-text').forEach((el, index) => {
        const keys = ['home', 'about', 'services', 'projects', 'contact'];
        if (index < keys.length) {
            el.textContent = lang[keys[index]];
        }
    });
    
    // Profile title
    const profileTitle = document.querySelector('.title');
    if (profileTitle) profileTitle.textContent = lang.fullstackDev;
    
    // Hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = lang.heroTitle;
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = lang.heroSubtitle;
    
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    if (heroButtons.length >= 2) {
        heroButtons[0].querySelector('span').textContent = lang.viewProjects;
        heroButtons[1].querySelector('span').textContent = lang.contactMe;
    }
    
    // Skills section
    const skillsTitle = document.querySelector('.skills-section .section-title');
    if (skillsTitle) skillsTitle.textContent = lang.skillsTitle;
    
    // Projects section
    const projectsTitle = document.querySelector('.projects-section .section-title');
    if (projectsTitle) {
        projectsTitle.textContent = lang.projectsTitle;
    }
    
    const projectsSubtitle = document.querySelector('.projects-section .section-subtitle');
    if (projectsSubtitle) projectsSubtitle.textContent = lang.projectsSubtitle;
    
    // Project cards
    document.querySelectorAll('.project-title').forEach((el, index) => {
        const titles = [lang.project1Title, lang.project2Title, lang.project3Title];
        if (index < titles.length) el.textContent = titles[index];
    });
    
    document.querySelectorAll('.project-description').forEach((el, index) => {
        const descs = [lang.project1Desc, lang.project2Desc, lang.project3Desc];
        if (index < descs.length) el.textContent = descs[index];
    });
    
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach((el, index) => {
      if (index % 2 === 0) {
        // índice par => primer link => Visitar
        el.textContent = lang.visit;
      } else {
        // índice impar => segundo link => Repositorio
        el.textContent = lang.repository;
      }
    });
    
    const projectsCTA = document.querySelector('.projects-cta p');
    if (projectsCTA) projectsCTA.textContent = lang.interestedInProject;
    
    const projectsCTABtn = document.querySelector('.projects-cta a span');
    if (projectsCTABtn) projectsCTABtn.textContent = lang.contactMe;
    
    // About section
    const aboutTitle = document.querySelector('.about-section .section-title');
    if (aboutTitle) {
        aboutTitle.textContent = lang.aboutTitle;
    }
    
    const aboutDescription = document.querySelector('.about-description');
    if (aboutDescription) aboutDescription.textContent = lang.aboutDescription;
    
    const aboutSkillsTitle = document.querySelector('.about-skills h3');
    if (aboutSkillsTitle) aboutSkillsTitle.textContent = lang.mySkills;
    
    // Timeline items
    document.querySelectorAll('.timeline-date').forEach((el, index) => {
        const dates = [lang.timeline1Date, lang.timeline2Date];
        if (index < dates.length) el.textContent = dates[index];
    });
    
    document.querySelectorAll('.timeline-content h4').forEach((el, index) => {
        const titles = [lang.fullstackDev, lang.freelanceDev];
        if (index < titles.length) el.textContent = titles[index];
    });
    
    document.querySelectorAll('.timeline-content p').forEach((el, index) => {
        const texts = [lang.spainRemote, lang.workingWithClients];
        if (index < texts.length) el.textContent = texts[index];
    });
    
    // Skill items
    document.querySelectorAll('.skill-item span').forEach((el, index) => {
        const skills = [lang.webDevelopment, lang.uiUxDesign, lang.database, lang.devops, lang.adaptabilidad];
        if (index < skills.length) el.textContent = skills[index];
    });
    
    // Services section
    const servicesTitle = document.querySelector('.services-section .section-title');
    if (servicesTitle) {
        servicesTitle.textContent = lang.servicesTitle;
    }
    
    document.querySelectorAll('.service-card h3').forEach((el, index) => {
        const services = [lang.webDevelopmentService, lang.mobileApps, lang.backendApis];
        if (index < services.length) el.textContent = services[index];
    });
    
    document.querySelectorAll('.service-card p').forEach((el, index) => {
        const descs = [lang.webDevelopmentDesc, lang.mobileAppsDesc, lang.backendApisDesc];
        if (index < descs.length) el.textContent = descs[index];
    });
    
    // Contact section
    const contactTitle = document.querySelector('.contact-section .section-title');
    if (contactTitle) {
        contactTitle.textContent = lang.contactTitle;
    }
    
    const contactDescription = document.querySelector('.contact-description');
    if (contactDescription) contactDescription.textContent = lang.contactDescription;
    
    // Form labels
    const nameLabel = document.querySelector('label[for="name"]');
    if (nameLabel) nameLabel.textContent = lang.nameLabel;

    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) emailLabel.textContent = lang.emailLabel;

    const subjectLabel = document.querySelector('label[for="subject"]');
    if (subjectLabel) subjectLabel.textContent = lang.subjectLabel;

    const messageLabel = document.querySelector('label[for="message"]');
    if (messageLabel) messageLabel.textContent = lang.messageLabel;
    
    const contactButton = document.querySelector('.btn-submit span');
    if (contactButton) contactButton.textContent = lang.sendMessage;
}

// Configuración del language switcher
function setupLanguageSwitcher() {
    const toggle = document.getElementById('language-toggle');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (toggle) {
        toggle.addEventListener('change', function() {
            const newLang = this.checked ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
    
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // Cargar idioma guardado o detectar el del navegador
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.substring(0, 2);
    
    if (savedLang) {
        changeLanguage(savedLang);
    } else if (browserLang === 'es' || browserLang === 'en') {
        changeLanguage(browserLang);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    initPage();
    
    // Animate skill bars on scroll
    animateSkillBars();
    
    // Setup form submission
    setupContactForm();
    
    // Setup navigation
    setupNavigation();

    setupLanguageSwitcher();

    setupContactForm();
    
    // Initialize particles
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', '/public/assets/particles.json', function() {
            console.log('Particles.js loaded');
        });
    }
});

function initPage() {
    // Add active class to current page nav item
    const currentPage = window.location.pathname.split('/').pop() || 'home';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        if (item.dataset.page === currentPage) {
            item.classList.add('active');
            item.querySelector('.nav-link').classList.add('active');
        }
    });
    
    // Animate elements on page load
    const animatedElements = document.querySelectorAll('.text-reveal');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Animate skill bars based on data-level
    const skillBars = document.querySelectorAll('.skill-bar[data-level]');
    skillBars.forEach(bar => {
        const level = bar.dataset.level;
        bar.style.width = `${level}%`;
    });
}

function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target.querySelector('.skill-bar');
                const level = skillBar.dataset.level;
                skillBar.style.width = `${level}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('.btn-submit');
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Enviando...</span><div class="loading-spinner"></div>';
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Mensaje Enviado!</span><i class="fas fa-check"></i>';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = '<span>Enviar Mensaje</span><i class="fas fa-paper-plane"></i>';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Gracias por tu mensaje! Te responderé pronto.';
                    contactForm.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 3000);
                }, 2000);
            }, 1500);
        });
    }
}

function setupNavigation() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-open');
        });
    }
}

// GSAP Animations - Versión corregida
function initGSAPAnimations() {
    // Verifica que GSAP y ScrollTrigger estén cargados
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Registra el plugin ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        // Animaciones del hero
        gsap.from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-buttons', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.from('.floating-cube', {
            duration: 2,
            scale: 0.5,
            opacity: 0,
            ease: 'elastic.out(1, 0.5)'
        });

        gsap.from('.sidebar.mobile-open .nav-item', {
            x: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out'
        });
        
        // Animaciones al hacer scroll
        gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
        
        // Animación de timeline
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        // Animación de proyectos
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
    } else {
        console.warn('GSAP o ScrollTrigger no están cargados correctamente');
    }
}

// Footer functionality
function setupFooter() {
    // Set current year in copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });
    }
    
    // Projects Filter Functionality
    function setupProjectsFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.dataset.filter;
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.dataset.category === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Project Card Animation
    function animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
            });
        });
    }
    
    // Add to DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', function() {
        setupProjectsFilter();
        animateProjectCards();
    });
}


// Formulario de contacto mejorado
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        if (submitBtn.dataset.sending === 'true') return; // Previene doble envío
    
        submitBtn.dataset.sending = 'true';
        const formData = new FormData(contactForm);
        const originalBtnContent = submitBtn.innerHTML;
    
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviando...</span><div class="loading-spinner"></div>';
    
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                })
            });
    
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Respuesta no válida del servidor');
            }
    
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
    
            await Swal.fire({
                title: '¡Éxito!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                background: 'var(--dark-color)',
                color: 'var(--text-color)',
                confirmButtonColor: 'var(--primary-color)'
            });
    
            contactForm.reset();
    
        } catch (error) {
            console.error('Error:', error);
            await Swal.fire({
                title: 'Error',
                text: error.message || 'Ocurrió un error al enviar el mensaje',
                icon: 'error',
                confirmButtonText: 'Entendido',
                background: 'var(--dark-color)',
                color: 'var(--text-color)',
                confirmButtonColor: 'var(--primary-color)'
            });
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.dataset.sending = 'false';
        }
    });
}