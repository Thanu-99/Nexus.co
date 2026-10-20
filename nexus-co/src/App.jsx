
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "ARCHITECTURE / EDITORIAL",
    name: "Morrow House",
    description: "Space to slow down.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    className: "project-image--architecture",
  },
  {
    number: "02",
    category: "E-COMMERCE / OBJECTS",
    name: "Onda Objects",
    description: "Everyday, reimagined.",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85",
    className: "project-image--objects",
  },
  {
    number: "03",
    category: "BEAUTY / LAUNCH",
    name: "Noon / After",
    description: "A softer kind of statement.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85",
    className: "project-image--beauty",
  },
];

const services = [
  {
    number: "01",
    title: "Landing pages",
    description:
      "Big idea, one unforgettable scroll. Built to convert attention into action.",
  },
  {
    number: "02",
    title: "Business websites",
    description:
      "A clear, confident home for your business, team, and next chapter.",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Beautiful storefronts that make browsing feel as good as buying.",
  },
  {
    number: "04",
    title: "Rebrands & visuals",
    description:
      "A sharper point of view, brought to life across every digital touchpoint.",
  },
];

const plans = [
  {
    name: "The Spark",
    price: "1199/-",
    intro: "For the first big impression",
    features: [
      "One-page website",
      "Custom visual direction",
      "Mobile-ready build",
    ],
  },
  {
    name: "The Full Story",
    price: "2199/-",
    intro: "For brands ready to grow",
    features: [
      "Multi-page website",
      "Brand + web direction",
      "SEO-ready foundations",
    ],
    popular: true,
  },
  {
    name: "The Whole World",
    price: "4599/-",
    intro: "For a brand with big plans",
    features: [
      "E-commerce experience",
      "Full visual identity",
      "Launch support",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us everything",
    description:
      "A relaxed chat about your business, your goals, and what makes you different.",
  },
  {
    number: "02",
    title: "We find the feeling",
    description:
      "We shape your direction, build the visual world, and make the good ideas louder.",
  },
  {
    number: "03",
    title: "Make it real",
    description:
      "You get a website that is ready to launch, grow, and do some serious talking.",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <span className="arrow" aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span className="label-dot" />
      {children}
    </p>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("A new website");
  const [message, setMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Project enquiry — ${projectType}`);
    const body = encodeURIComponent(
      `Hi NEXUS/CO.,\n\n${message}\n\nMy email: ${email}\nProject type: ${projectType}`
    );

    window.location.href = `mailto:thanusrithota3@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <span className="wordmark-symbol">N</span>
          <span>
            NEXUS<span className="wordmark-slash">/</span>CO.
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"}>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Start a project <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-topline">
            <span>INDEPENDENT DIGITAL STUDIO</span>
            <span>2024—25 <span className="topline-star">✳</span></span>
          </div>

          <div className="hero-main">
            <h1>
              Make your
              <br />
              <span className="hero-second-line">
                mark <span className="hero-online">online</span>
                <span className="hero-asterisk">*</span>
              </span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-description">
                We build expressive websites for ambitious people and
                businesses ready to be remembered.
              </p>

              <a href="#contact" className="button button-dark">
                Let&apos;s make something <Arrow diagonal />
              </a>
              <a href="#work" className="hero-text-link">
                See our work <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Creative digital studio artwork">
            <div className="art-grid" />
            <div className="art-ring art-ring-one" />
            <div className="art-ring art-ring-two" />
            <div className="art-disc">
              <span>N</span>
            </div>
            <div className="art-caption">GOOD IDEAS<br />DON&apos;T SIT STILL.</div>
            <span className="art-cross art-cross-one">✳</span>
            <span className="art-cross art-cross-two">✳</span>
            <span className="art-coordinate">N / 01 — DIGITAL MATTERS</span>
          </div>

          <div className="hero-footer">
            <a href="#services" className="scroll-cue">
              <span className="scroll-line" />
              SCROLL TO EXPLORE
            </a>
            <div className="moving-words" aria-label="Our services">
              <span>WEB DESIGN</span><b>✳</b>
              <span>BRAND WORLDS</span><b>✳</b>
              <span>DIGITAL EXPERIENCES</span><b>✳</b>
            </div>
          </div>
        </section>

        <section className="intro section-pad" id="services">
          <div className="intro-heading">
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2>
              Good design gets attention.
              <br />
              <span>Great design gets remembered.</span>
            </h2>
          </div>

          <div className="intro-bottom">
            <p className="intro-copy">
              Your website should feel like your brand on its very best day.
              We turn ideas into digital experiences that look sharp, work
              beautifully, and make business feel a little more exciting.
            </p>
            <a href="#service-list" className="text-link">
              Explore services <Arrow diagonal />
            </a>
          </div>

          <div className="services-list" id="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">/{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Ask about ${service.title}`}>
                  <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading-row">
            <div>
              <SectionLabel>SELECTED CONCEPTS</SectionLabel>
              <h2 className="display-heading">Made to be seen.</h2>
            </div>
            <p className="section-aside">
              Sample worlds for brands with something to say. Your project
              could be next.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                href="#contact"
                className="project-card"
                key={project.number}
              >
                <div className={`project-image ${project.className}`}>
                  <img src={project.image} alt={`${project.name} concept`} loading="lazy" />
                  <span className="project-image-number">{project.number}</span>
                  <span className="project-open"><Arrow diagonal /></span>
                </div>
                <div className="project-meta">
                  <span>{project.number} / {project.category}</span>
                  <span>CONCEPT PROJECT</span>
                </div>
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="work-marquee">
            <p>
              YOUR BEST <span>LOOKS GOOD</span> ONLINE <Arrow diagonal />
            </p>
            <span className="marquee-star">✳</span>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="section-heading-row pricing-heading">
            <div>
              <SectionLabel>STRAIGHT-UP PRICING</SectionLabel>
              <h2 className="display-heading">Pick your energy.</h2>
            </div>
            <p className="section-aside">
              Reasonable pricing. Serious craft. No mysterious agency fog.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`price-card ${plan.popular ? "price-card--popular" : ""}`}
                key={plan.name}
              >
                {plan.popular && <div className="popular-label">MOST POPULAR <span>✳</span></div>}
                <div className="price-card-top">
                  <span className="plan-index">N / {String(plans.indexOf(plan) + 1).padStart(2, "0")}</span>
                  <h3>{plan.name}</h3>
                  <p>{plan.intro}</p>
                </div>
                <div className="price">
                  <span>from</span> {plan.price}
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><span>＋</span>{feature}</li>
                  ))}
                </ul>
                <a className="price-link" href="#contact">
                  Let&apos;s talk <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Every project is different. Final pricing depends on scope, content,
            and the details that make it yours.
          </p>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="process-intro">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2 className="display-heading">
              From hmm...
              <br />
              to <span>hell yes.</span>
            </h2>
            <p>
              No unnecessary complexity. Just a thoughtful process and a
              really good result.
            </p>
          </div>

          <div className="process-steps">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="step-arrow"><Arrow diagonal /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top">
            <SectionLabel>YOUR TURN</SectionLabel>
            <span className="contact-sticker">GOOD IDEAS<br />WELCOME HERE <span>✳</span></span>
          </div>

          <h2>
            Have a good idea?
            <br />
            <span>Let&apos;s make it real.</span>
          </h2>

          <div className="contact-bottom">
            <p>Tell us what you&apos;re building. We&apos;ll bring the good energy.</p>
            <a className="button button-light" href="mailto:https://formspree.io/f/xaeqzvdg">
              Start a project <Arrow diagonal />
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              YOUR EMAIL
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@yourbrand.com"
                required
              />
            </label>
            <label>
              WHAT ARE YOU BUILDING?
              <select
                value={projectType}
                onChange={(event) => setProjectType(event.target.value)}
              >
                <option>A new website</option>
                <option>A brand refresh</option>
                <option>An online store</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="message-field">
              A LITTLE ABOUT YOUR IDEA
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us the big idea..."
                rows="3"
                required
              />
            </label>
            <button className="button button-light form-submit" type="submit">
              Send your idea <Arrow diagonal />
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-symbol">N</span>
            <span>NEXUS<span className="wordmark-slash">/</span>CO.</span>
          </a>
          <p>Websites for the<br />wonderfully ambitious.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom">
          <span>INDEPENDENT BY DESIGN.</span>
          <span>© {new Date().getFullYear()} NEXUS/CO.</span>
          <a href="https://formspree.io/f/xaeqzvdg">SAY HELLO ↗</a>
        </div>
      </footer>
    </>
  );
}

export default App;
