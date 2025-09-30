import Hero from "./components/Hero/Hero";
import Offers from "./components/Offer/Offer";
import MenuSection from "./components/Menu/MenuSection"
import AboutSection from "./components/About/AboutSection"
import Footer from "./components/Footer/Footer"


export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <AboutSection />
      <MenuSection />
      <Footer />
    </>
  );
}
