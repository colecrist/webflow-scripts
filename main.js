console.log("Webflow External Script Loaded!");

// Example: GSAP Scroll Animation
gsap.from(".your-element", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".your-element",
        start: "top 80%",
        scrub: true
    }
});
