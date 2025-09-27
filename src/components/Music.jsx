export default function Music() {
  return (
    <section id="musica" className="music reveal" >
      <h2>Mi música</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto 2rem", lineHeight: "1.6" }}>
        Descubrí mis últimos sets y playlists seleccionadas, creadas para transformar 
        cualquier evento en una experiencia musical inolvidable. Escuchá, sentí y viví la música.
      </p>

      <div className="music-embeds" style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {/* Ejemplos de embeds */}
        <iframe
          title="Spotify Set 1"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      
      </div>
    </section>
  )
}