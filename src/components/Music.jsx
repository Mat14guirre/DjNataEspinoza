export default function Music() {
  return (
    <section id="musica" className="music reveal" >
      <h2>Mi música</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto 2rem", lineHeight: "1.6" }}>
        Descubrí mis últimos sets y playlists seleccionadas, creadas para transformar 
        cualquier evento en una experiencia musical inolvidable. Escuchá, sentí y viví la música.
      </p>

      <div className="music-embeds" >
        
        <iframe
          title="Spotify Progressive"
          src="https://open.spotify.com/embed/playlist/04JyQ2R6YntyGs0en2HdsP?si=rqWSsrOsTsCESNOZH5wx3g&pi=_d76M36gQA6Ey "
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>

        <iframe
          title="Spotify House/Tech"
          src="https://open.spotify.com/embed/playlist/0W0iqruGvvMdcn3hsN7zjF?si=gG3VkMtmR3mj46wutlZppw&pi=rV5rGWtvRHKtK  "
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>

        <iframe
          title="Spotify Reggaeton"
          src="https://open.spotify.com/embed/playlist/13BpiuM2Nbpn3JsCjvsR6N?si=T7qIjT1tQO-WKLRWrChV1g&pi=GmvEesVJQxiaM  "
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>

      
      </div>
    </section>
  )
}