import { gsap, ScrollTrigger } from "./gsapCore";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (selector, opacity = 0, y = 50, duration = 1) => {
  gsap.from(selector, {
    opacity,
    y,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
    },
    stagger: 0.2,
  });
};

gsap.utils.toArray(".fade-in").forEach((title) => {
  gsap.from(title, {
    opacity: 0,
    y: 35,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },
  });
});
gsap.from(".fade-scroll", {
  y: 60,
  opacity: 0,
  duration: 1.3,
  stagger: 0.15,
  ease: "power4.out",
});

gsap.utils.toArray(".typing").forEach((sub) => {
  gsap.from(sub, {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: sub,
      start: "top 90%",
    },
    onStart: () => {
      let text = sub.textContent;
      sub.textContent = "";
      let index = 0;
      let typing = setInterval(() => {
        sub.textContent += text[index];
        index++;
        if (index >= text.length) clearInterval(typing);
      }, 40);
    },
  });
});


const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.getAttribute("data-target");

      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
        onUpdate: function () {
          counter.innerText = Math.floor(counter.innerText) + "+";
        },
        onComplete: function () {
          counter.innerText = target + "+";
        },
      });

      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver.observe(counter));

