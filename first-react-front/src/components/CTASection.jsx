// src/components/CTASection.jsx
export default function CTASection() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div className="cta-copy">
          <h2>See if Daylight is available for your home</h2>
          <p>
            Answer a few quick questions and we’ll check your eligibility, available programs, and potential
            savings with Daylight.
          </p>
        </div>
        <div className="cta-actions">
          <button className="btn primary">See if you qualify</button>
          <button className="btn ghost">Get your estimate</button>
        </div>
      </div>
    </section>
  );
}
