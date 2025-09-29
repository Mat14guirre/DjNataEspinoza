import express from "express";
import multer from "multer";
import Event from "../models/Event.js";

const router = express.Router();

// Configuración de multer (guardar imágenes en /uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// 📌 GET todos los eventos
router.get("/", async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

// 📌 POST crear evento
router.post("/", upload.single("image"), async (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    date: req.body.date,
    place: req.body.place,
    image: req.file ? `/uploads/${req.file.filename}` : null
  });
  await newEvent.save();
  res.json(newEvent);
});

// 📌 DELETE borrar evento
router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Evento eliminado" });
});

export default router;
