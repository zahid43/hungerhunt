import Header from "./Header/Header";
import Slider from "./Slider";

export default function Hero() {
  return (
    <div className="hero_area position-relative">
      {/* Background image */}
      <div className="bg-box">
        <img src="/images/hero-bg.jpg" alt="Hero background" />
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      <Header />
      <Slider />
    </div>
  );
}
