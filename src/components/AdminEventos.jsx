import { useState, useEffect } from "react";

export default function AdminEventos() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    place: "",
    image: null,
  });

  // Cargar eventos al inicio
  useEffect(() => {
    fetch("https://dj-nata-espinoza.vercel.app/")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  // Manejo de inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Enviar evento nuevo
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("date", formData.date);
    data.append("place", formData.place);
    if (formData.image) data.append("image", formData.image);

    await fetch("https://dj-nata-espinoza.vercel.app/", {
      method: "POST",
      body: data,
    });

    // refrescar lista
    const res = await fetch("https://dj-nata-espinoza.vercel.app/");
    const updated = await res.json();
    setEvents(updated);

    // limpiar form
    setFormData({ title: "", date: "", place: "", image: null });
  };

  // Eliminar evento
  const handleDelete = async (id) => {
    await fetch(`https://dj-nata-espinoza.vercel.app/${id}`, {
      method: "DELETE",
    });

    setEvents(events.filter(ev => ev._id !== id));
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Panel de administración de eventos</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="title"
          placeholder="Título del evento"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Lugar"
          value={formData.place}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <button type="submit">Agregar evento</button>
      </form>

      <div>
        {events.map(ev => (
          <div key={ev._id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{ev.title}</h3>
            <p>{new Date(ev.date).toLocaleDateString()} — {ev.place}</p>
            {ev.image && (
              <img
                src={`https://dj-nata-espinoza.vercel.app/${ev.image}`}
                alt={ev.title}
                style={{ width: "200px", borderRadius: "8px" }}
              />
            )}
            <br />
            <button onClick={() => handleDelete(ev._id)}>Borrar</button>
          </div>
        ))}
      </div>
    </section>
  );
}
