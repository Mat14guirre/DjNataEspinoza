import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  place: String,
  image: String, // ruta de la foto subida
});

export default mongoose.model("Event", eventSchema);
