// src/components/WhyDaylight.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyDaylight() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = sectionRef.current.querySelectorAll(".why-col, .why-card");

      gsap.from(blocks, {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="why" id="why" ref={sectionRef}>
      <div className="container why-inner">
        <div className="why-col">
          <p className="eyebrow">Why Daylight</p>
          <h2>The grid is changing. Your home can keep up.</h2>
          <p className="why-text">
            Extreme weather, aging infrastructure, and rising demand are putting pressure on the grid.
            Daylight turns your home into a flexible part of the system – so you stay powered and spend less.
          </p>
          <ul className="why-list">
            <li>Lower your exposure to peak-time rates.</li>
            <li>Stay online during grid outages.</li>
            <li>Get rewarded for helping stabilize the grid.</li>
          </ul>
        </div>

        <aside className="why-card">
          <h3>The risks of the old grid</h3>
          <p>
            Traditional power flows one way: from large plants to homes. When demand spikes or lines fail,
            outages and high prices follow. With more connected devices and batteries, homes can now actively
            support the grid instead of suffering from it.
          </p>
          <div className="why-pill-row">
            <div className="why-pill">
              <span className="why-pill-label">Outages</span>
              <span className="why-pill-value">More frequent & longer</span>
            </div>
            <div className="why-pill">
              <span className="why-pill-label">Prices</span>
              <span className="why-pill-value">Higher at peak times</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
