import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Music from "./components/Music"; // nueva sección de sets
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Eventos from "./components/Eventos";
import Fiestas from "./components/Fiestas";

export default function App() {
  useEffect(() => {
    const revealOnScroll = () => {
      // Selecciona todos los elementos con la clase 'reveal'
      const revealElements = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("active");
        }
      });
    };

    // Llamada inicial y suscripción al scroll
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Fiestas />
      <Eventos/>
      <Music />
      <CTA />
      <Footer />
    </>
  );
}
