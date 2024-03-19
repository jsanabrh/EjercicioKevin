const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentController.js');

router.get('/api/v1/students', studentsController.getAllStudents);

router.post('/api/v1/createStudent', studentsController.createStudent);

module.exports = router;