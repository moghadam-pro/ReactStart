// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">Daylight</div>
          <p className="footer-copy">
            A fictional clone for learning React and GSAP – built by you.
          </p>
          <p className="footer-meta">© {year} Daylight Network</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-heading">Company</span>
            <a href="#how">How it works</a>
            <a href="#why">Why Daylight</a>
            <a href="#sunpoints">Sun Points</a>
          </div>
          <div className="footer-column">
            <span className="footer-heading">Legal</span>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
