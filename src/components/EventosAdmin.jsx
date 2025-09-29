import React, { useState, useEffect } from "react";

export default function EventosAdmin() {
  const [claveIngresada, setClaveIngresada] = useState("");
  const [autenticado, setAutenticado] = useState(false);

  const [eventos, setEventos] = useState([]);
  const [nuevoEvento, setNuevoEvento] = useState({
    fecha: "",
    lugar: "",
    imagen: "",
  });

  const CLAVE_CORRECTA = "djnata123"; // cámbiala a la que quieras

  // 🔓 Login con clave simple
  const manejarLogin = (e) => {
    e.preventDefault();
    if (claveIngresada === CLAVE_CORRECTA) {
      setAutenticado(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  // 📡 Traer eventos desde el backend
  useEffect(() => {
    if (autenticado) {
      fetch("http://localhost:5000/api/eventos")
        .then((res) => res.json())
        .then((data) => setEventos(data));
    }
  }, [autenticado]);

  // ➕ Agregar evento
  const agregarEvento = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoEvento),
    })
      .then((res) => res.json())
      .then((data) => {
        setEventos([...eventos, data]);
        setNuevoEvento({ fecha: "", lugar: "", imagen: "" });
      });
  };

  // ❌ Eliminar evento
  const eliminarEvento = (id) => {
    fetch(`http://localhost:5000/api/eventos/${id}`, { method: "DELETE" })
      .then(() => setEventos(eventos.filter((e) => e._id !== id)));
  };

  if (!autenticado) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Acceso DJ</h2>
        <form onSubmit={manejarLogin}>
          <input
            type="password"
            placeholder="Ingresá la clave"
            value={claveIngresada}
            onChange={(e) => setClaveIngresada(e.target.value)}
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#111" }}>
      <h2>Panel de Eventos (DJ)</h2>

      {/* Formulario nuevo evento */}
      <form onSubmit={agregarEvento} style={{ marginBottom: "2rem" }}>
        <input
          type="date"
          value={nuevoEvento.fecha}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, fecha: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Lugar"
          value={nuevoEvento.lugar}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, lugar: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL de imagen"
          value={nuevoEvento.imagen}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, imagen: e.target.value })}
          required
        />
        <button type="submit">Agregar Evento</button>
      </form>

      {/* Lista de eventos */}
      <ul>
        {eventos.map((e) => (
          <li key={e._id} style={{ marginBottom: "1rem" }}>
            <strong>{e.lugar}</strong> - {e.fecha}
            <button
              onClick={() => eliminarEvento(e._id)}
              style={{ marginLeft: "1rem", color: "red" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}