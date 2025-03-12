console.log("Webflow External Script Loaded!");
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>;
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#hero .hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  
    gsap.from("#hero .hero-subtitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  
    gsap.from("#hero .hero_cta-wrap", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.6,
    });
  });
  