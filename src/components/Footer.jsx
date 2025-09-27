import { FaInstagram, FaSpotify, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} DJ Natanael Espinoza. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/djnataespinoza?igsh=MWl6Znl2czQwaGlldw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://open.spotify.com/user/21zjzvdxkov3ky6srsxwsw3ja?si=208a1e32e74142b3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <FaSpotify />
        </a>
        <a
          href="https://wa.me/5493416165302"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
