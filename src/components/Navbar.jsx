import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para hacer scroll suave a secciones
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cierra el menú en mobile
    }
  };

  return (
    <nav className="reveal">
      <h1>DJ Nata Espinoza</h1>

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