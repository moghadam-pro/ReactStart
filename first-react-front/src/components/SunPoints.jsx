// src/components/SunPoints.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SunPoints() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".sun-card");

    gsap.from(cards, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="sunpoints" id="sunpoints" ref={sectionRef}>
      <div className="container">
        <div className="sun-header">
          <p className="eyebrow">Sun Points</p>
          <h2>Get rewarded for flexibility</h2>
          <p className="sun-subtitle">
            When Daylight uses your stored energy to support the grid, you earn Sun Points that can be redeemed
            as statement credits or rewards.
          </p>
        </div>

        <div className="sun-grid">
          <article className="sun-card">
            <h3>Earn automatically</h3>
            <p>
              You don’t have to watch the market or think about events. Daylight connects, optimizes, and rewards
              you in the background.
            </p>
          </article>

          <article className="sun-card">
            <h3>Track your impact</h3>
            <p>
              See how much energy you’ve shifted, how many events you’ve supported, and the Sun Points you’ve earned.
            </p>
          </article>

          <article className="sun-card">
            <h3>Turn points into value</h3>
            <p>
              Use Sun Points toward your bill, bank them for later, or apply them to other home energy services.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
