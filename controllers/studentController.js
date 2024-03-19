const Student = require('../models/studentModel.js');

const studentsController = {
    getAllStudents: async(req,res) => {
        try {
            const student = await Student.find();
            res.json(student);
        } catch (error) {
            console.error('Error al obtener los estudiantes: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    createStudent: async(req,res) => {
        const studentData = req.body;
        try {
            const newStudent = new Student(studentData);
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent);
        } catch (error) {
            console.error('Error al crear el estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = studentsController;