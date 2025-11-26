// src/components/FeaturesSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".feature-card");

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const features = [
    {
      eyebrow: "Power your home for less",
      title: "Pay less for the energy you use",
      text: "Daylight shifts your energy use to cheaper times and taps into stored power when rates are high.",
      bullets: ["Smart load shifting", "Use more when it costs less", "Automatic savings"],
    },
    {
      eyebrow: "Keep the lights on",
      title: "Stay powered when the grid goes down",
      text: "Battery backup keeps essentials like lights, Wi-Fi, and refrigeration on during outages.",
      bullets: ["Backup during outages", "Prioritize critical loads", "Peace of mind 24/7"],
    },
    {
      eyebrow: "Get rewarded",
      title: "Earn for supporting the grid",
      text: "When the grid needs help, Daylight can use stored energy and reward you with credits.",
      bullets: ["Sun Points rewards", "Help stabilize the grid", "Turn energy into income"],
    },
  ];

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="container">
        <div className="features-header">
          <p className="eyebrow">Three ways Daylight works for you</p>
          <h2>Power, protection, and rewards in one network</h2>
        </div>

        <div className="features-grid">
          {features.map((item, i) => (
            <article className="feature-card" key={i}>
              <div className="feature-pill">{item.eyebrow}</div>
              <h3>{item.title}</h3>
              <p className="feature-text">{item.text}</p>
              <ul className="feature-list">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
