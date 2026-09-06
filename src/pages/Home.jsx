import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default Home;