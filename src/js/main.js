console.log("WITH GOD I CAN");
import { gsap, ScrollTrigger } from "./gsapCore";
import intlTelInput from "intl-tel-input";
import "./../assets/styles/style.css";
import "intl-tel-input/build/css/intlTelInput.css";
import { floatingAvatars } from "./gsapAnimation.js";
import { animateOnScroll } from "./smoothScroll.js";

gsap.registerPlugin(ScrollTrigger);

// ✅ Navigation toggle (open/close mobile menu)
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navigation = document.querySelector(".navigation");

  if (hamburger && navLinks && navigation) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navigation.classList.toggle("active-nav");
      hamburger.classList.toggle("open");
    });
  }
});

// ✅ Smooth scroll + close nav when clicked
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const navigation = document.querySelector(".navigation");
  const hamburger = document.querySelector(".hamburger");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href.startsWith("#")) {
        e.preventDefault();

        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      navigation.classList.remove("active-nav");
      hamburger.classList.remove("open");
      document.querySelector(".nav-links").classList.remove("active");
    });
  });
});

/* ---------------------------------------------------
   ✅ Lazy-load GSAP animation only when user scrolls
----------------------------------------------------- */
document.addEventListener("DOMContentLoaded", async () => {
  const markerText = document.querySelector(".cta-highlight");

  if (markerText) {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      markerText,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "100% 100%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: markerText,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
});

window.addEventListener("DOMContentLoaded", () => {
  floatingAvatars();
  
});


document.addEventListener("DOMContentLoaded", async () => {
  const productsGrid = document.querySelector(".grid-container");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (productsGrid) {
    const { loadProducts } = await import("./packages.js");
    
    // Define the total number of products (from your packages array)
    const totalProducts = 12; // Update this if your array changes
    let currentShown = 3; // Start with 3 products (1 row)
    
    // Initially load the first 3 products (no animation on page load)
    loadProducts(currentShown);
    
    // Function to animate newly added cards
    const animateNewCards = (newCount) => {
      const allCards = productsGrid.querySelectorAll(".pricing-grid");
      const newCards = Array.from(allCards).slice(-newCount);
      
      gsap.fromTo(newCards, 
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          ease: "power2.out",
          stagger: 0.15
        }
      );
    };
    
    // Add event listener to "View More" button
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        // Check if this click will show the last row (i.e., remaining products)
        if (currentShown + 3 >= totalProducts) {
          // Hide the button immediately for the last row
          loadMoreBtn.style.display = "none";
          // Load all remaining products
          loadProducts();
          // Animate the newly added cards (the remaining ones)
          animateNewCards(totalProducts - currentShown);
        } else {
          // Not the last row: increment and load the next 3
          currentShown += 3;
          loadProducts(currentShown);
          animateNewCards(3);
        }
      });
    }
  }
});
let lastScrollY = window.scrollY;
const nav = document.querySelector(".navigation");

// About
animateOnScroll("#About", 0, 50, 1.2);


animateOnScroll("#Contact", 0, 60, 1.2);

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

