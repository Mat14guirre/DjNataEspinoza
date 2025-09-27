const features = [
  { title: "Profesionalismo", desc: "Experiencia comprobada en eventos y festivales exclusivos." },
  { title: "Creatividad", desc: "Sets únicos que combinan distintos estilos musicales con elegancia." },
  { title: "Versatilidad", desc: "Capacidad de adaptarme a cualquier tipo de evento o público." },
]

export default function Features() {
  return (
    <section className="features reveal">
      <h2>Mis servicios</h2>
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