const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    nombre:String,
    edad:Number,
    correo:String,
    idProfesor:Number
});

const students = mongoose.model('Students', studentsSchema);

module.exports = students;