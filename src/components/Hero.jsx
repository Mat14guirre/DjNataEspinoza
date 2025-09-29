import { useState, useEffect } from "react";

// Fotos del DJ con título para cada slide
const fotosDJ = [
  { src: "/djnata7.jpg", title: "Fiesta total" },
  { src: "/djnata8.jpg", title: "Noches inolvidables" },
  { src: "/djnata10.jpg", title: "Vibras que contagian" },
  { src: "/djnata9.jpg", title: "Público activo" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Autoplay cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotosDJ.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="hero reveal parallax">
      {/* Título principal */}
      <h1 style={{ animationDelay: "0.2s" }}>
        <span style={{ color: "#f8f8f6ff" }}>DJ Natanael Espinoza</span>
      </h1>

      {/* Carrusel del DJ */}
      <div className="hero-carousel" style={{ animationDelay: "0.6s" }}>
        {fotosDJ.map((foto, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === index ? "active" : ""}`}
          >
            <img src={foto.src} alt={`DJ ${i + 1}`} />
            <div className="carousel-title">{foto.title}</div>
          </div>
        ))}
      </div>

      {/* Texto descriptivo debajo */}
      <p className="hero-description">
        La música que transforma tu noche en una experiencia inolvidable.
      </p>
    </section>
  );
}