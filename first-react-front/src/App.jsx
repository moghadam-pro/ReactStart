// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import WhyDaylight from "./components/WhyDaylight";
import SunPoints from "./components/SunPoints";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <FeaturesSection />
        <HowItWorks />
        <WhyDaylight />
        <SunPoints />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
