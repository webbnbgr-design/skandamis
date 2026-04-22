import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import ServicesSection from './components/ServicesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BioSection />
        <ServicesSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
