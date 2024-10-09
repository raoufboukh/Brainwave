import Hero from "./Components/hero";
import Navbar from "./Components/Navbar";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Benefits from "./Components/benefits";
import Collaboration from "./Components/collaboration";
import Generating from "./Components/generating";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Generating/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>

      <ButtonGradient/>
    </>
  );
}

export default App;
