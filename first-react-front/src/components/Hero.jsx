// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // context برای تمیز کردن راحت‌تر در unmount
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(cardRef.current, {
        x: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.35,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Power you control</p>
          <h1 ref={titleRef}>Join the Daylight Network</h1>
          <p className="hero-subtitle" ref={subtitleRef}>
            Save on energy. Earn rewards. Stay powered when the grid goes down.
          </p>
          <div className="hero-actions" ref={buttonsRef}>
            <button className="btn primary">See if you qualify</button>
            <button className="btn ghost">Get your estimate</button>
          </div>
        </div>

        <div className="hero-card" ref={cardRef}>
          <div className="hero-card-row">
            <div className="metric">
              <span className="label">kWh generated</span>
              <span className="value">8.2kWh - 9.5kWh</span>
            </div>
          </div>
          <div className="hero-card-row">
            <div className="metric">
              <span className="label">Backup stored</span>
              <span className="value">Ready</span>
            </div>
          </div>
          <div className="hero-card-row">
            <div className="metric">
              <span className="label">Thermostat</span>
              <span className="value">68°F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
