import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Models/Navbar.jsx";
import LogoSection from "./components/Models/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <Education />
      <Contact />
    </>
  );
};

export default App;
