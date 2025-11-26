// src/components/HowItWorks.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const steps = sectionRef.current.querySelectorAll(".how-step");

    gsap.from(steps, {
      x: -40,
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

  const steps = [
    {
      step: "Step 1",
      title: "Join the Daylight Network",
      text: "Answer a few questions about your home and existing equipment. We’ll check if Daylight is a good fit.",
    },
    {
      step: "Step 2",
      title: "Connect your home",
      text: "We link your batteries, solar, and smart devices so they work together as one flexible energy system.",
    },
    {
      step: "Step 3",
      title: "Your energy works for you",
      text: "Daylight automatically shifts and stores energy to lower costs, protect you from outages, and earn rewards.",
    },
  ];

  return (
    <section className="how" id="how" ref={sectionRef}>
      <div className="container how-inner">
        <div className="how-copy">
          <p className="eyebrow">How Daylight works</p>
          <h2>Three simple steps to join the network</h2>
          <p className="how-subtitle">
            From a quick eligibility check to a connected, intelligent home energy system – Daylight guides you through
            every step.
          </p>
        </div>

        <div className="how-steps">
          {steps.map((item, i) => (
            <article className="how-step" key={i}>
              <div className="how-step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
