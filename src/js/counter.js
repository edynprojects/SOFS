import { gsap } from "gsap";

// Select all counters
const counters = document.querySelectorAll(".counter");

// Intersection Observer to trigger animation only when visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); // run only ONCE
    }
  });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));

function animateCounter(counter) {
  const targetValue = +counter.getAttribute("data-target");

  gsap.to(counter, {
    innerText: targetValue,
    duration: 2,
    ease: "power2.out",
    snap: { innerText: 1 } // Ensures whole numbers (not decimals)
  });
}
