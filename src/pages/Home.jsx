import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar/> 
      <main>
        <Hero/>
        <About/>
        <Features/>
        <HowItWorks/>
        <CTA/>
      </main>

      <Footer/>
    </div>
  );
}

export default Home;