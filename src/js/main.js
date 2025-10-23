console.log("WITH GOD I CAN");

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const markerText = document.querySelector(".cta-highlight");

gsap.fromTo(
  markerText,
  { backgroundSize: "0% 100%" },
  {
    backgroundSize: "100% 100%",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: markerText,
      start: "top 80%", // when 80% of viewport reaches the element
      toggleActions: "play none none reverse",
    },
  }
);
import { floatingAvatars } from "./gsapAnimation";

window.addEventListener("DOMContentLoaded", () => {
  floatingAvatars();
});
import { loadProducts } from "./packages";

window.addEventListener("DOMContentLoaded", () => {
  loadProducts(); // will generate your grid dynamically
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navigation.classList.toggle("active-nav");
});

let lastScrollY = window.scrollY;
const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down
    nav.classList.add("nav-hidden");
    console.log("Scrolling Down");
  } else {
    // scrolling up
    console.log("Scrolling up");
    nav.classList.remove("nav-hidden");
  }
  lastScrollY = window.scrollY;
});
import "./../assets/styles/style.css";

const counters = document.querySelectorAll(".count");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
          const speed = 30; // smaller = faster
          if (count < target) {
            count += 1;
            counter.textContent = count + "+";
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target + "+";
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => observer.observe(counter));
