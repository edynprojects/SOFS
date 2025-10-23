import gsap from "gsap";

export function floatingAvatars() {
  gsap.utils.toArray(".floating").forEach((el) => {
    gsap.to(el, {
      y: "random(-100, 100)",
      x: "random(-50, 0)",
      duration: "random(8, 12)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
}


