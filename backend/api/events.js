import { Event } from "../../models/Event.js";

let eventos = []; // temporal

export default function handler(req, res) {
  if (req.method === "GET") return res.status(200).json(eventos);
  if (req.method === "POST") {
    const nuevo = { _id: Date.now().toString(), ...req.body };
    eventos.push(nuevo);
    return res.status(201).json(nuevo);
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    eventos = eventos.filter((e) => e._id !== id);
    return res.status(204).end();
  }
  return res.status(405).end(); // método no permitido
}