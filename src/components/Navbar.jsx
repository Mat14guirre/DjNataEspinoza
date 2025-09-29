import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const navigate = useNavigate();

  // Función para hacer scroll suave a secciones
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cierra el menú en mobile
    }
  };

  // Manejo de clicks en el logo
  const manejarClickLogo = () => {
    setLogoClicks(logoClicks + 1);
    if (logoClicks + 1 >= 5) {
      setLogoClicks(0); // resetea el contador
      navigate("/eventos-admin"); // redirige al panel de admin
    }
  };

  return (
    <nav className="reveal">
      <div className="logo" onClick={manejarClickLogo} style={{ cursor: "pointer" }}>
        <img
          src="/djnatalogo.jpg"
          alt="DJ Natanael Espinoza"
          className="logodj"
        />
      </div>

      {/* Botón hamburguesa */}
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú */}
      <ul className={menuOpen ? "active" : ""}>
        <li onClick={() => scrollToSection("inicio")}>Inicio</li>
        <li onClick={() => scrollToSection("sobre-mi")}>Sobre mi</li>
        <li onClick={() => scrollToSection("musica")}>Música</li>
        <li onClick={() => scrollToSection("contacto")}>Contacto</li>
        <li onClick={() => scrollToSection("eventos")}>Eventos</li>
      </ul>

      <button className="primary" onClick={() => scrollToSection("contacto")}>
        Contratar
      </button>
    </nav>
  );
}