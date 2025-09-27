import { useState, useEffect } from "react";

// Fotos del DJ
const fotosDJ = [
  "https://picsum.photos/800/400?random=10",
  "https://picsum.photos/800/400?random=11",
  "https://picsum.photos/800/400?random=12",
  "https://picsum.photos/800/400?random=13",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Autoplay cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotosDJ.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="hero reveal parallax">
      <h1 style={{ animationDelay: "0.2s" }}>
        <span style={{ color: "#ffc107" }}>DJ Natanael Espinoza</span>
      </h1>
      <p style={{ animationDelay: "0.3s" }}>
        La música que transforma tu noche en una experiencia inolvidable.
      </p>

      {/* Carrusel del DJ */}
      <div className="hero-carousel" style={{ animationDelay: "0.6s" }}>
        {fotosDJ.map((foto, i) => (
          <img
            key={i}
            src={foto}
            alt={`DJ Natanael Espinoza ${i + 1}`}
            className={`carousel-slide ${i === index ? "active" : ""}`}
            style={{
              width: "100%",
              borderRadius: "10px",
              maxHeight: "400px",
              objectFit: "cover",
              position: "absolute",
              transition: "opacity 1s ease-in-out",
              opacity: i === index ? 1 : 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}