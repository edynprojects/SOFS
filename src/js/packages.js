export function loadProducts() {
  const packages = [
    {
      title: "Swift & Sure <br> Formular  for Marriage Without Tears",
      image: "/photo_2025-10-20_22-41-09.jpg",
            positionClass: "center",
      info: "Many believe marriage is about finding the right person, but the Swift & Sure formula proves it's about becoming the right person first. This program shifts the focus from external search to internal mastery, ensuring you attract and commit to a partner who complements the fully realized you.",
      features: [
        "Know your source & Why you were born",
        "Find & Own Yourself",
        "Groom, Position and Celebrate Yourself",
        "Fish at the Friendship Pool",
        "Attract Your type",
        "Be Happy"
      ],
      link: "#"
    },
    {
      title: "SmartPath Parenting Course",
      image: "/avatar 1.jpg",
      info: "Parenting is beautiful… but it’s also one of the hardest jobs on earth. <br>Many parents love deeply yet feel lost — unsure how to guide, correct, or connect without guilt or frustration. It’s more than a class — it’s your compass for raising whole, secure, and purpose-driven children.",
      features: [
        "Decode your child’s behavior and unique wiring",
        "Discipline without damage — correct with love and authority",
        "Build emotional connection and lifelong trust",
        "Raise spiritually, mentally, and emotionally balanced children",
        "Heal from your own parenting wounds so you don’t pass them on"
      ],
      link: "#"
    },
    {
      title: "Into-Me-See: The User’s Manual Creation Course",
      image: "/avatar 8.jpg",
      positionClass: "center",
      info: "Every heart comes with a language.<br>Every person carries an emotional operating system — the way they function, react, heal, and connect.<br>Into-Me-See is a powerful self-discovery and relationship course that helps you create your personal user’s manual — a living guide that reveals how you love to be understood, supported, and cherished.<br>Whether you’re single or married, this course helps you and your partner see beyond words — into who you truly are.",
      features: [
        "Personal Language Unveiling",
        "Emotional Operating System (OS) Mapping",
        "Creation of a Personal User's Manual:",
        "Beyond-Words Communication",
        "Intimacy Redefined by Self-Awareness"
      ],
      link: "#"
    },
    {
      title: "Unburden & Clarity Session",
      image: "/Clarity Session.jpg",
      info: "Do you have pressing questions or burdens weighing on your mind? Our Unburden & Clarity Session provides a completely judgment-free space where you can share your deepest concerns. You'll not only offload your stress but will also receive direct guidance tailored precisely to your needs and get clear, actionable answers to your most critical relationship concerns.",
      features: [
        "Unburden in a judgement free-space",
        "Receive guidance relating to your needs",
        "Get answer to your relationship concern",
      ],
      link: "#"
    },
    {
      title: "SCOREWISE  MASTERY COURSE",
      image: "/Scorewise.png",
            positionClass: "top",
      info: "ScoreWise helps you stop chasing goals and start living wisely. <br>It’s a purpose-driven guide for anyone ready to move from confusion to clarity — singles, professionals, parents, or leaders who want results that reflect balance, peace, and purpose.",
      features: [
        " Set the right goals for your life’s current season.",
        "Design simple, peace-filled plans that actually work.",
        " Stay focused and consistent without losing balance.",
      ],
      link: "#"
    },
    {
      title: "Hope Rising Teens Therapy & Coaching Course",
      image: "/Hope rising.png",
      positionClass: "top",
      info: "Maybe your teen isn’t stubborn , rebellious or hard to reach — maybe there’s more beneath the surface. <br>The Hope Rising Course provides a supportive, non-judgmental space where your teen can heal from emotional wounds, rebuild their self-worth, and swap confusion for confidence. We teach them to understand their feelings and transform their inner pain into personal power.",
      features: [
        "Healing Emotional Wounds",
        "Confidence Rebuilding",
        "Pain-to-Power Conversion",
      ],
      link: "#"
    },
            {
      title: "Vidanova — The New Life Course for Young Adults",
      image: "/vidanova.jpg",
      positionClass: "top",
      info: "Your family is more than emotions — it’s an ecosystem.A divine structure meant to host purpose, peace, and power.But without governance, homes drift — into conflict, confusion, or exhaustion. <br>This course helps you reset, redesign, and rebuild — from love to leadership.",
      features: [
        "Identity Discovery",
        "Strength Uncovering & Recognition",
        "Future Life-Mapping",
      ],
      link: "#"
    },
            {
      title: "FAMILY GOVERNANCE: REBUILDING THE FAMILY SYSTEM FROM WITHIN",
      image: "/family goverance.jpg",
            positionClass: "top",
      info: "Your family is more than emotions — it’s an ecosystem.A divine structure meant to host purpose, peace, and power.But without governance, homes drift — into conflict, confusion, or exhaustion. <br>This course helps you reset, redesign, and rebuild — from love to leadership.",
      features: [
        "Create family systems that protect values and multiply success.",
        "Establish order without losing intimacy or compassion.",
        "Heal cycles, break patterns, and design continuity across generations.",
      ],
      link: "#"
    },
    {
      title: "💍 RINGS & REALITY",
      image: "/rings.jpg",
      positionClass: "top",
      info: "Beyond the Ring — Discover the Wisdom That Keeps Love Alive<br>This course heals the mind, builds emotional maturity, and helps you rewrite your emotional story by exposing relationship myths. You will move past feelings and fantasy to gain the practical tools needed to create a relationship built on real growth and lasting commitment. <br> Because the ring may start the story, but reality is where love is truly tested and made beautiful. 💍❤️",
      features: [
        "Foundation Building (Fantasy to Reality)",
        "Maturity and Pattern Uncovering",
        "Myth Exposure and Mental Healing",
      ],
      link: "#"
    },

  ];

  const gridContainer = document.querySelector(".grid-container");
  if (!gridContainer) return;

  gridContainer.innerHTML = packages
    .map(pkg => `
      <div class="pricing-grid">
        <div class="pricing-grid-img">
          <img src="${pkg.image}" alt="${pkg.title}" class="${pkg.positionClass}">
        </div>
        <h3 class="pricing-grid-title">${pkg.title}</h3>
        <p class="pricing-grid-info">${pkg.info}</p>
        <div class="pricing-grid-features">
          ${pkg.features.map(feature => `<div><ion-icon name="caret-forward-circle-outline"></ion-icon><li>${feature}</li></div>`).join("")}
        </div>
        <div class="pricing-grid-button">
          <button onclick="window.location.href='${pkg.link}'">Get started</button>
        </div>
      </div>
    `)
    .join("");
}
