// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Power you control</p>
          <h1>Join the Daylight Network</h1>
          <p className="hero-subtitle">
            Save on energy. Earn rewards. Stay powered when the grid goes down.
          </p>
          <div className="hero-actions">
            <button className="btn primary">See if you qualify</button>
            <button className="btn ghost">Get your estimate</button>
          </div>
        </div>

        <div className="hero-card">
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
