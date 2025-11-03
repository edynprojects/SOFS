console.log("WITH GOD I CAN");

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import intlTelInput from "intl-tel-input";
import "./../assets/styles/style.css";
import "intl-tel-input/build/css/intlTelInput.css";
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

// window.addEventListener("scroll", () => {
//   if (window.scrollY > lastScrollY) {
//     // scrolling down
//     nav.classList.add("nav-hidden");
//     console.log("Scrolling Down");
//   } else {
//     // scrolling up
//     console.log("Scrolling up");
//     nav.classList.remove("nav-hidden");
//   }
//   lastScrollY = window.scrollY;
// });

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

const input = document.querySelector("#phone");

const iti = intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("NG")); // fallback to Nigeria
  },
  nationalMode: false,
  autoPlaceholder: "polite",
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.2/build/js/utils.js"
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("✅ Message sent successfully!");
    form.reset();
  } else {
    alert("❌ Something went wrong. Please try again.");
  }
});
