import React from "react";

// Datos de ejemplo
const eventos = [
  {
    fecha: "2025-10-05",
    lugar: "Club Neon",
    imagen: "https://picsum.photos/300/200?random=1",
  },
  {
    fecha: "2025-10-12",
    lugar: "Bar Sunset",
    imagen: "https://picsum.photos/300/200?random=2",
  },
  {
    fecha: "2025-10-19",
    lugar: "Discoteca Eclipse",
    imagen: "https://picsum.photos/300/200?random=3",
  },
  {
    fecha: "2025-10-26",
    lugar: "Sky Lounge",
    imagen: "https://picsum.photos/300/200?random=4",
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="eventos reveal" style={{ padding: "4rem 1rem", background: "#111", color: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Próximos Eventos</h2>
      
      <div className="eventos-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {eventos.map((e, idx) => (
          <div key={idx} className="evento-card" style={{ position: "relative", borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}>
            <img src={e.imagen} alt={e.lugar} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "10px",
              background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              color: "#fff"
            }}>
              <h3 style={{ margin: 0 }}>{e.lugar}</h3>
              <p style={{ margin: 0 }}>{e.fecha}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}