import express from 'express';
import { addStudent, getStudents } from '../controllers/studentController.js';

const studentRoutes=express.Router();

studentRoutes.post('/add',addStudent);
studentRoutes.get('/students-data',getStudents);

export default studentRoutes;

