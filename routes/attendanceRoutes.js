import express from 'express';
import { markAttendance,getAttendanceReport } from '../controllers/attendanceController.js';

const attendanceRoutes=express.Router();

attendanceRoutes.post('/mark',markAttendance);
attendanceRoutes.get('/attendance-report',getAttendanceReport);


export default attendanceRoutes;