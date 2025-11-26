// src/components/Header.jsx
export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">Daylight</div>

        <nav className="nav">
          <a href="#how">How it works</a>
          <a href="#why">Why Daylight</a>
          <a href="#sunpoints">Sun Points</a>
          <a href="#blog">Blog</a>
        </nav>

        <div className="header-cta">
          <button className="btn ghost">Brand Kit</button>
          <button className="btn primary">See if you qualify</button>
        </div>
      </div>
    </header>
  );
}
