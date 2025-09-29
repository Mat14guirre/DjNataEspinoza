import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const manejarClickLogo = () => {
    setLogoClicks((prev) => {
      const nuevo = prev + 1;
      if (nuevo >= 5) {
        navigate("/eventos-admin"); // redirige al panel de admin
        return 0; // resetea contador
      }
      return nuevo;
    });
  };

  return (
    <nav className="reveal">
      <div
        className="logo"
        onClick={manejarClickLogo}
        style={{ cursor: "pointer" }}
      >
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