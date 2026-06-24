/* ===========================================
   28 FITNESS
   Premium JavaScript
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Sticky Navbar
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
            navbar.style.background = "rgba(0,0,0,.95)";
        } else {
            navbar.classList.remove("shadow");
            navbar.style.background = "rgba(0,0,0,.65)";
        }

    });

    /* ==========================
       Close Mobile Navbar
    ========================== */

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {

                bootstrap.Collapse.getInstance(navbarCollapse).hide();

            }

        });

    });

    /* ==========================
       Smooth Scrolling
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Statistics Counter
    ========================== */

    const counters = document.querySelectorAll(".stats-section h2");

    let counterStarted = false;

    function startCounter() {

        if (counterStarted) return;

        const statsSection = document.querySelector(".stats-section");

        const trigger = statsSection.offsetTop - window.innerHeight + 100;

        if (window.scrollY >= trigger) {

            counterStarted = true;

            counters.forEach(counter => {

                const original = counter.innerText;

                const target = parseInt(original.replace(/\D/g, ""));

                const suffix = original.replace(/[0-9]/g, "");

                let current = 0;

                const increment = Math.ceil(target / 100);

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.innerText = current + suffix;

                }, 20);

            });

        }

    }

    window.addEventListener("scroll", startCounter);

    /* ==========================
       Scroll Reveal
    ========================== */

    const revealElements = document.querySelectorAll(

        ".feature-card,.plan-card,.trainer-card,.gallery-img,.testimonial-card"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = ".7s ease";

        observer.observe(el);

    });

    /* ==========================
       Gallery Hover
    ========================== */

    document.querySelectorAll(".gallery-img").forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.05)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

    /* ==========================
       Back To Top Button
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

    topButton.className = "btn btn-danger";

    topButton.style.position = "fixed";
    topButton.style.right = "25px";
    topButton.style.bottom = "25px";
    topButton.style.width = "55px";
    topButton.style.height = "55px";
    topButton.style.borderRadius = "50%";
    topButton.style.display = "none";
    topButton.style.zIndex = "9999";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       Trainer Card Tilt
    ========================== */

    document.querySelectorAll(".trainer-card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x / rect.width - 0.5) * 10;

            const rotateX = -(y / rect.height - 0.5) * 10;

            card.style.transform =
                `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0deg) rotateY(0deg)";

        });

    });

    /* ==========================
       Button Ripple Effect
    ========================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    console.log("28 FITNESS Loaded Successfully");

});