const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema({
  _id: Number,
  nombre: String,
  especialidad: String,
  correo: String,
});

const teachers = mongoose.model("Teachers", teachersSchema);

module.exports = teachers;
