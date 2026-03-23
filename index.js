document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for Scroll Reveal
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Modern Slideshow Logic
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (slides.length === 0) return;
        
        slides.forEach(slide => slide.classList.remove('active'));
        
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }    
        
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 5000); // Change image every 5 seconds for a calmer feel
    }
// Certificate Lightbox
const certPods = document.querySelectorAll('.cert-pod');
const body = document.body;

// Create lightbox element
const lightbox = document.createElement('div');
lightbox.className = 'lightbox-overlay';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" src="" alt="Certificate Expanded">
`;
body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-content');
const lightboxClose = lightbox.querySelector('.lightbox-close');

certPods.forEach(pod => {
    pod.addEventListener('click', () => {
        const img = pod.querySelector('img');
        if (img) {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        } else {
            // If no image, show the text in a styled way or ignore
            console.log("No image found in this pod");
        }
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});

    if (slides.length > 0) {
        showSlides();
    }
});
