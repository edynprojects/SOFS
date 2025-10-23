export function loadProducts() {
  const packages = [
    {
      title: "Basic Family Package",
      image: "/public/photo_2025-10-20_22-41-09.jpg",
      features: [
        "Access to family workshops",
        "Monthly counseling session",
        "Community support group",
        "Email support",
        "Family goal tracker",
        "Affordable pricing"
      ],
      link: "#"
    },
    {
      title: "Premium Family Plan",
      image: "/public/avatar 4.jpg",
      features: [
        "Weekly family mentoring",
        "Access to premium events",
        "Personal relationship coach",
        "Priority booking",
        "Customized family plans",
        "Exclusive webinars"
      ],
      link: "#"
    },
    {
      title: "School Partnership Plan",
           image: "/public/avatar 8.jpg",
      features: [
        "School-wide training",
        "Parent-teacher synergy program",
        "Family education materials",
        "On-site sessions",
        "Ongoing mentorship",
        "Annual evaluation report"
      ],
      link: "#"
    },
    {
      title: "Church Engagement Plan",
            image: "/public/avatar 11.jpg",
      features: [
        "Marriage ministry support",
        "Church-wide seminars",
        "Couples’ retreat sessions",
        "Custom sermon guides",
        "Volunteer training",
        "Follow-up strategy"
      ],
      link: "#"
    }
  ];

  const gridContainer = document.querySelector(".grid-container");
  if (!gridContainer) return;

  gridContainer.innerHTML = packages
    .map(pkg => `
      <div class="pricing-grid">
        <div class="pricing-grid-img">
          <img src="${pkg.image}" alt="${pkg.title}">
        </div>
        <h3 class="pricing-grid-title">${pkg.title}</h3>
        <div class="pricing-grid-features">
        
          ${pkg.features.map(feature => `<div><ion-icon name="checkmark-circle-outline"></ion-icon><li>${feature}</li></div>`).join("")}
        </div>
        <div class="pricing-grid-button">
          <button onclick="window.location.href='${pkg.link}'">Get started</button>
        </div>
      </div>
    `)
    .join("");
}
