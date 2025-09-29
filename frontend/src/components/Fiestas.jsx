const fotosFiestas = [
  "./fotobar2.jpg",
  "./fotobar3.jpg",
  "./fotobar4.jpg",
  "./fotobar6.jpg",
  "./fotobar1.jpg",
  "./fotobar5.jpg"
];

export default function Fiestas() {
  // duplicamos las fotos para loop infinito
  const loopFotos = [...fotosFiestas, ...fotosFiestas];

  return (
    <section
      id="fiestas"
      className="fiestas reveal"
      style={{ padding: "2rem 1rem", textAlign: "center" }}
    >
      <h2 style={{ color: "#ffc107", marginBottom: "1rem" }}>Escenarios de mi música</h2>
      <div className="gallery-container">
        <div className="gallery-slide">
          {loopFotos.map((foto, idx) => (
            <img
              key={idx}
              src={foto}
              alt={`Fiesta ${idx + 1}`}
              style={{ width: "400px", height: "280px", objectFit: "cover", borderRadius: "10px", flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}