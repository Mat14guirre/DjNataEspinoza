const features = [
  { 
    title: "Profesionalismo", 
    desc: "Cientos de eventos y fiestas privadas exitosos respaldan cada uno de mis sets, garantizando calidad y compromiso en cada presentación." 
  },
  { 
    title: "Creatividad", 
    desc: "Mezclas únicas y frescas que combinan géneros y ritmos, diseñadas para mantener al público conectado y vibrando toda la noche." 
  },
  { 
    title: "Versatilidad", 
    desc: "Capacidad de adaptarme a cualquier evento, público y ambiente, creando la atmósfera perfecta, desde fiestas íntimas hasta grandes eventos." 
  },
]
export default function Features() {
  return (
    <section className="features reveal">
      <h2>Mi propuesta musical</h2>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div
            className="feature reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}