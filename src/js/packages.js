
export function loadProducts(limit = null) {
  const packages = [
    {
      title: "SOFS Chritmas Express",
      image: "/Christmas Promo Image.webp",
      positionClass: "top",
      info: "THE CHRISTMAS THAT BROUGHT SOLUTIONS <br>This Christmas… something deeper than gifts is being unwrapped — Healing. Hope. Wholeness. This is not just another Christmas story.<br>It’s a reminder that love can heal, homes can rise again, and you too can start over — stronger.<br>Join the SOFS Christmas Express — All Courses Now ₦10,000 Only!<br>From the comfort of your home, in just 2 days, experience transformation through:",
      features: [
        "Swift & Sure — Marriage Without Tears",
        "Rings & Reality — The True Meaning of Marriage",
        "SmartPath Parenting — Raising Balanced Children",
        "Hope Rising — For Teens & Young Adults"
      ],
      addon: "📞 Call or message 09160003269 to register today. <br>🎄 Don’t miss this Christmas miracle — offer ends soon!",
      link: "https://selar.com/m/schooloffamilysolutionschristmaspromo"
    },
    {
      title: "Dear Royalty Online Course for Teenagers",
      image: "/Dear Royalty Image.webp",
      positionClass: "top",
      info: "Teenagers need a crown check, too<br>A transformative course for boys and girls to discover their identity. Dear Royalty  helps teenagers discover self-worth, build confidence, and make wise life choices.... So they grow up grounded, godly, and goal-driven. What it is: <br>A confidence-building, identity-shaping course for boys and girls. Helps them discover who they really are, make wiser choices, and grow into responsible young adults.<br><b>Perfect for you if :</b>",
      features: [
        "You’re a parent of a preteen or teen who needs guidance.",
        "You want your child to learn values, boundaries, and healthy self-esteem",
        "You believe teenage years don’t have to be wasted"
      ],
      addon: "Because whispering shadows and hollow echoes, silent struggles are real…<br>Let’s silence them, and help your teens rise as the queens and kings they truly are.",
      link: "https://selar.com/dearroyalty"
    },
    {
      title: "SmartPath Parenting Course",
      image: "SmartPath Parenting Image.webp",
      info: "Parenting doesn’t come with a manual—but SmartPath gives you the map. <br>That’s why we created the SmartPath Parenting Course—a transformational journey designed to help you parent with wisdom, confidence, and peace, using our  SOFS signature proven - tools and specialised strategies that work. <br> Inside SmartPath, you’ll discover how to",
      features: [
        "Decode your child’s behavior and unique wiring",
        "Discipline without damage—correct with love and authority",
        "Build emotional connection and lifelong trust",
        "Raise spiritually, mentally, and emotionally balanced children",
        "Heal from your own parenting wounds so you don’t pass them on"
      ],
      addon: "Because every child deserves a parent who knows the way—and every parent deserves a SmartPath<br>Parents are smarter. Love deeper. Raise wisely",
      link: "https://selar.com/smartpathparenting"
    },
    {
      title: "Into-Me-See: The User’s Manual Creation Course",
      image: "/Into-Me-See Manual Image.webp",
      positionClass: "center",
      info: "Because  INTIMACY begins with SEEING INTO ME<br>Every heart comes with a language.<br>Every person carries an emotional operating system—the way they function, react, heal, and want to be loved.<br>Into-Me-See is a powerful self-discovery and relationship course that helps you create your personal user’s manual—a living guide that reveals how you love to be understood, supported, and cherished, so others can understand, support, and love you deeply. <br>Create your personal User’s Manual using SOFS’ signature tools and specialised strategies for deeper self-awareness and better relationships.",
      features: [],
      addon: "Whether you’re single or married, this course helps you and your partner see beyond words — into who you truly are. <br>✨ Into-Me-See — Because intimacy begins with seeing into me. <br>Register Today!",
      link: "https://selar.com/intomeseemanual"
    },
    {
      title: "Swift & Sure: Formular  for Marriage Without Tears",
      image: "/Swift&Sure Image.webp",
      positionClass: "center",
      info: "When you’re tired of waiting—but want to do it right.<br> Swift & Sure session is a practical coaching course for singles who feel stuck in the <b>“When will it happen?”</b> cycle and are tempted to jump in fast, with eyes half-closed. <br>This is your wake-up call : Before you rush down the aisle, let’s work on you. <br>We’ll tackle the real stuff—your mindset, emotional baggage, expectations, communication style, and non-negotiables. <br><b>Perfect for you if :</b>",
      features: [
        "You’re single and honestly.. you’re just tired of waiting.",
        "You feel desperate to say “Yes” to whoever asks - but you know you deserve more than just any ring.",
        "You want practical tools to become marriage-ready, not just marriage-hungry.",
        " Real-life exercises, honest conversations, and breakthroughs that build you up",
      ],
      addon: "Marry Swift, but be Sure. This time, your “I do” won’t come with regrets",
      link: "https://selar.com/swiftandsure"
    },
    {
      title: "Unburden & Clarity Session",
      image: "/Clarity Session Image.webp",
      info: "FREE 15 -MINUTES  CLARITY SESSION Feeling heavy but don’t even know where to start?<br>Sometimes, all you need is one real conversation — one moment to breathe, talk, and be heard without judgment.<br>The Free 15-Minute Clarity Session is that space.<br>A warm, private, no-pressure conversation designed to help you:",
      features: [
        " Untangle your thoughts",
        "Unburden your heart",
        "See your next step clearly — without feeling overwhelmed",
      ],
      addon: "You don’t need to have it all figured out.<br>You just need to start with clarity.No therapy. No fixing. Just a safe space to be seen and supported. Book your Free 15-Minute Clarity Session today—Because sometimes, the first step to healing is finally talking to someone who truly listens.",
      link: "https://calendly.com/admin-schooloffamilysolutions/30min"
    },
    {
      title: "SCOREWISE  MASTERY COURSE",
      image: "/ScoreWise Image.webp",
      positionClass: "top",
      info: "SCOREWISE - The Goal - Smashing Masterclass<br>ScoreWise helps you stop chasing goals and start living wisely. <br>It’s a purpose-driven guide for anyone ready to move from confusion to clarity — singles, professionals, parents, or leaders who want results that reflect balance, peace, and purpose.<br>In this course, you’ll learn to:",
      features: [
        "Set the right goals for your life’s current season.",
        "Turn confusion into clarity and focus.",
        "Build life systems that make winning simple — and peace possible",
        "Break self-sabotaging patterns and win with wisdom.",
        "Stay focused and consistent without losing balance.",
      ],
      addon: " ScoreWise — where wisdom meets winning, and peace meets purpose.",
      link: "https://selar.com/scorewisemastery"
    },
    {
      title: "Hope Rising Teens Therapy & Coaching Course",
      image: "/Hope Rising Image.webp",
      positionClass: "top",
      info: "Maybe your teen isn’t stubborn , rebellious or hard to reach—maybe there’s more beneath the surface. <br>When teens act out, shut down, or rebel, it’s not always defiance — it’s often trauma speaking louder than words.<br>Hope Rising helps teens heal from emotional wounds, rebuild confidence, and rediscover who they truly are.<br>Through therapy, coaching, and relatable activities, they learn to turn pain into power and confusion into clarity.",
      features: [
        "“I stopped fighting my teen daughter and started understanding her - Hope Rising changed our home “ - Mrs Ebok form Uyo",
        "“Hope Rising gave my son his smile back” - Mrs Alli from Lagos",
      ],
      addon: "",
      link: "https://selar.com/hoperising"
    },
    {
      title: "Vidanova — The New Life Course for Young Adults",
      image: "/VidaNova Image.webp",
      positionClass: "top",
      info: "VidaNova -  For Young Adults (Ages 18 - 22years)<br>Between who you were and who you’re becoming - there’s VidaNova.<br>It’s the bridge between questions and clarity, dreams and direction <br>VidaNova was created for young adults aged 18–2 - A powerful life-mapping experience that helps you discover your identity, uncover your strengths, and chart a future that truly fits you.<br>In this powerful course , you will :",
      features: [
        "Break free from confusion and build clarity for your next chapter.",
        "Discover your strengths — and learn how to turn them into strategy.",
        "Step into your purpose — bold, prepared, and ready for impact.",
      ],
      addon: "Vidanova - where you stop guessing and start becoming. <br>Your New life starts now.Register Today!",
      link: "https://selar.com/vidanova"
    },
    {
      title: "FAMILY GOVERNANCE: REBUILDING THE FAMILY SYSTEM FROM WITHIN",
      image: "/Family Goverance Image.webp",
      info: "Your family is more than emotions — it’s an ecosystem. A divine structure meant to host purpose, peace, and power. But without governance, homes drift — into conflict, confusion, or exhaustion. <br>In this course, you’ll discover how to:",
      features: [
        "Reset, Redesign, and Rebuild — from love to leadership",
        "Build unity through shared vision and roles.",
        "Create family systems that protect values and multiply success.",
        "Establish order without losing intimacy or compassion.",
        "Heal cycles, break patterns, and design continuity across generations."
      ],
      addon: "Governance turns good homes into great legacies. And great legacies into generational impact.Because when love gains structure, destiny gains direction.  Welcome to Family Governance — where families are reborn into systems that work.",
      link: "https://selar.com/familygoverance"
    },
    {
      title: "RINGS & REALITY",
      image: "/Rings and Realities Image.webp",
      positionClass: "top",
      info: "Before the ring, there was a dream. After the ring, there’s a REALITY<br>Between both lies a journey—one that only wisdom can sustain. <br> Rings & Realities isn’t just a relationship course; it’s a heart renovation. It exposes the myths, heals the mind, and builds the maturity needed to thrive in love and marriage.  You’ll learn how to",
      features: [
        "Heal from what your heart never fully recovered from",
        "Understand your partner’s emotional language",
        "Rebuild broken bonds and restore intimacy",
        "Replace silent battles with honest conversations",
        "Create a love story worth growing old in"
      ],
      addon: "Whether you’re waiting for the ring or wearing it already, this course helps you move from fantasy to foundation — from feelings to understanding — from romance to real growth.Because the ring may start the story,but reality is where love is truly tested and made beautiful.",
      link: "https://selar.com/ringsandreality"
    },
    {
      title: "Reignite 365",
      image: "/Reignite Image.webp",
      positionClass: "top",
      info: "Reignite365 — Love That Thrives, Not Just Survives<br>Has the spark dimmed between you?<br> Do conversations now feel like arguments, and home feels heavy instead of happy? <br>Reignite365 is an 8-hour life-changing family enrichment experience designed to help couples and families reconnect, communicate, and rebuild love that lasts. <br>Through our SOFS signature tools and specialized strategies, you’ll rediscover",
      features: [
        "Emotional closeness",
        "Heal hidden hurts",
        "Create a home where peace and purpose live again",
      ],
      addon: "Whether you’re newlyweds, parents in the rush of life, or partners who’ve drifted apart, Reignite365 helps you turn tired love into timeless connection. <br>Because love shouldn’t just survive — it should shine, grow, and reignite every day of the year.",
      link: "https://selar.com/reignite365"
    },
  ];

  // If limit is provided, slice the array to show only the first 'limit' items
  const productsToShow = limit ? packages.slice(0, limit) : packages;

  const gridContainer = document.querySelector(".grid-container");
  if (!gridContainer) return;

  gridContainer.innerHTML = productsToShow
    .map(pkg => `
      <div class="pricing-grid">
        <div class="pricing-grid-img">
          <img src="${pkg.image}" alt="${pkg.title}" class="${pkg.positionClass || ''}">
        </div>
        <h3 class="pricing-grid-title">${pkg.title}</h3>
        <p class="pricing-grid-info">${pkg.info}</p>
        <div class="pricing-grid-features">
          ${pkg.features.map(feature => `<div><ion-icon name="caret-forward-circle-outline"></ion-icon><li>${feature}</li></div>`).join("")}
        </div>
        <p class="moreInfo">${pkg.addon}</p>
        <div class="pricing-grid-button">
          <button onclick="window.location.href='${pkg.link}'">Get started</button>
        </div>
      </div>
    `)
    .join("");
}