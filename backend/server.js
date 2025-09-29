import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Event } from "./models/Event.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let eventos = []; // temporal

app.get("/api/events", (req, res) => {
  res.json(eventos);
});

app.post("/api/events", (req, res) => {
  const nuevo = { _id: Date.now().toString(), ...req.body };
  eventos.push(nuevo);
  res.status(201).json(nuevo);
});

app.delete("/api/events/:id", (req, res) => {
  eventos = eventos.filter((e) => e._id !== req.params.id);
  res.status(204).end();
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor local corriendo en http://localhost:${PORT}`));