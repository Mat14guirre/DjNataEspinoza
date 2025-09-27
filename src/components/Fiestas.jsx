import { useState } from "react";

const fotosFiestas = [
  "https://picsum.photos/400/300?random=20",
  "https://picsum.photos/400/300?random=21",
  "https://picsum.photos/400/300?random=22",
  "https://picsum.photos/400/300?random=23",
  "https://picsum.photos/400/300?random=24",
  "https://picsum.photos/400/300?random=25",
];

export default function Fiestas() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % fotosFiestas.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + fotosFiestas.length) % fotosFiestas.length);
  };

  // Mostrar 3 fotos a la vez (desktop)
  const visibleFotos = [];
  for (let i = 0; i < 3; i++) {
    visibleFotos.push(fotosFiestas[(startIndex + i) % fotosFiestas.length]);
  }

  return (
    <section id="fiestas" className="fiestas reveal" style={{ padding: "2rem 1rem", textAlign: "center" }}>
      <h2 style={{ color: "#ffc107", marginBottom: "1rem" }}>Mi Gente</h2>
      <div className="gallery-container">
        <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
        <div className="gallery-slide">
          {visibleFotos.map((foto, idx) => (
            <img key={idx} src={foto} alt={`Fiesta ${idx + 1}`} />
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
}