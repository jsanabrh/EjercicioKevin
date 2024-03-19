const mongoose = require('mongoose');
let Students,Teachers;

const connectDatabase = async() => {
    try {
        if(!Students){
            Students = mongoose.model('Students', require("../models/studentModel").schema);
        }
        if(!Teachers){
            Teachers = mongoose.model('Teachers', require("../models/teacherModel").schema);
        }
        await mongoose.connect('mongodb+srv://juanhoyos0422:juan123456789@ejerciciokevin.pdufexq.mongodb.net/')
        .then(()=> console.log('MongoDB connected'))
        .catch((err) => console.log(err))
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDatabase;