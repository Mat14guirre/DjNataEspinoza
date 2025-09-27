import { FaInstagram, FaSpotify, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} DJ Natanael Espinoza. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <FaSpotify />
        </a>
        <a
          href="https://wa.me/54911XXXXXXXX"
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
