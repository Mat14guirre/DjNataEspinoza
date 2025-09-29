import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventsRoutes from "./routes/events.js";

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // servir imágenes
app.use("/api/events", eventsRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/djnata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB conectado");
  app.listen(PORT, () => console.log(`🚀 Server corriendo en http://localhost:${PORT}`));
}).catch(err => console.error(err));
