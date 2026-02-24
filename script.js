window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.backdropFilter = window.scrollY > 50 ? "blur(14px)" : "blur(8px)";
});

document.addEventListener("mousemove", (e) => {
    const header = document.querySelector(".header");
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    header.style.setProperty("--mx", `${x}px`);
    header.style.setProperty("--my", `${y}px`);
});


document.querySelectorAll('.cards .card').forEach(card => {
    let angle = 0;

    // ⭐ Change la vitesse ici
    let speed = 0.8; // 2 = normal | 5 = rapide | 0.5 = lent

    function animate() {
        angle += speed;
        card.style.setProperty('--angle', angle + 'deg');
        requestAnimationFrame(animate);
    }

    animate();
});


const animate = ScrollReveal({
    distance: '60px',
    duration: 1800,
    delay: 200,
    reset: false
});

/* -------------------------------------------
   HEADER
--------------------------------------------*/
animate.reveal('.header', { origin: 'top' });


/* -------------------------------------------
   SECTION HOME
--------------------------------------------*/
animate.reveal('.home-image img', { origin: 'left' });
animate.reveal('.home-card', { origin: 'right' });
animate.reveal('.home-card h1', { origin: 'bottom', delay: 300 });
animate.reveal('.home-card p', { origin: 'bottom', delay: 400 });
animate.reveal('.home-btn', { origin: 'bottom', delay: 500 });


/* -------------------------------------------
   SECTION CARDS
--------------------------------------------*/
animate.reveal('.cards h3', { origin: 'top' });
animate.reveal('.cards h1', { origin: 'top', delay: 200 });

animate.reveal('.card-container .card', {
    origin: 'bottom',
    interval: 200
});

animate.reveal('.why-us h3', { origin: 'top', distance: '40px', delay: 100 }); animate.reveal('.why-us h1', { origin: 'top', distance: '40px', delay: 200 }); animate.reveal('.why-container .why-box', { origin: 'bottom', distance: '50px', interval: 150 });

// PROCESS
animate.reveal('.process h3', { origin: 'top' });
animate.reveal('.process h1', { origin: 'top', delay: 200 });
animate.reveal('.process-step', { interval: 150, origin: 'left' });
animate.reveal('.process-arrow', { interval: 150, origin: 'bottom' });

/* -------------------------------------------
   FOOTER
--------------------------------------------*/
animate.reveal('.footer-col', { origin: 'bottom', interval: 150 });
animate.reveal('.footer-bottom', { origin: 'bottom', delay: 300 });



document.addEventListener("DOMContentLoaded", () => {
    const scrollBar = document.getElementById("scroll-progress");
    if (!scrollBar) return;

    function updateScrollBar() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (docHeight <= 0) {
            scrollBar.style.width = "0%";
            return;
        }

        const progress = (scrollTop / docHeight) * 100;
        scrollBar.style.width = progress + "%";
    }

    window.addEventListener("scroll", updateScrollBar);
    window.addEventListener("resize", updateScrollBar);
    updateScrollBar();
});






// CTA popup
const ctaBtn = document.getElementById("ctaBtn");
const ctaCard = document.getElementById("ctaCard");

ctaBtn.addEventListener("click", () => {
    ctaCard.classList.toggle("active");
});


// FAQ accordéon
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


animate.reveal('.faq h3', { origin: 'top' });
animate.reveal('.faq h1', { origin: 'top', delay: 200 });
animate.reveal('.faq-item', { interval: 150, origin: 'bottom' });
animate.reveal('.faq-contact', { interval: 150, origin: 'bottom' });


// Animation des compteurs
const counters = document.querySelectorAll('.counter');
const speed = 80; // vitesse d'animation

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Lancement quand la section apparaît à l'écran
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
    }
}, { threshold: 0.4 });

observer.observe(document.querySelector('.impact'));
ScrollReveal().reveal('.impact h3', { delay: 100, distance: '40px', origin: 'bottom' });
ScrollReveal().reveal('.impact h1', { delay: 200, distance: '40px', origin: 'bottom' });
ScrollReveal().reveal('.impact-card', { interval: 150, distance: '40px', origin: 'bottom' });


document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_l0zgtc9", "template_200649d", this)
        .then(() => {
            document.getElementById("form-status").innerText = "Message envoyé avec succès !";
            this.reset();
        })
        .catch(() => {
            document.getElementById("form-status").innerText = "Erreur lors de l’envoi.";
        });
});

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});


document.documentElement.style.scrollBehavior = "smooth";


homeImg.addEventListener("touchmove", (e) => {
  e.preventDefault(); // bloque le scroll horizontal
}, { passive: false });

document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0,0)`;
  });
});


const text = "Votre agence premium.";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector('.typing').textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

type();


document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateX(${ -y / 20 }deg) rotateY(${ x / 20 }deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0)`;
  });
});



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

let timeSpent = 0;
setInterval(() => timeSpent++, 1000);

function trackSection(sectionName) {
    fetch("track.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "section=" + sectionName + "&time=" + timeSpent
    });

    timeSpent = 0;
}

