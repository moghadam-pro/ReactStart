// src/components/StatsStrip.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsStrip() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".stat-card");

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const stats = [
    { value: "30–60%", label: "Lower energy costs" },
    { value: "24/7", label: "Backup power" },
    { value: "15–30%", label: "Monthly bill reduction" },
    { value: "$1,200+", label: "Annual savings" },
    { value: "45 min", label: "Average setup time" },
    { value: "150k+", label: "Households powered" },
  ];

  return (
    <section className="stats-strip" ref={sectionRef}>
      <div className="container stats-grid">
        {stats.map((item, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
