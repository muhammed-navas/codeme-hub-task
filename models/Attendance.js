import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Half-day'], required: true }
});


export default mongoose.model('Attendance',attendanceSchema);
