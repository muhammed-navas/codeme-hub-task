import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";

export const markAttendance=async(req,res)=>{
    try {
        const { studentId, date, status } = req.body;
        const attendance = new Attendance({ studentId, date, status })
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getAttendanceReport=async(req,res)=>{
    try {
                
                const students = await Student.find();

                const report = await Promise.all(students.map(async (student) => {
                    // Fetch attendance records for each student
                    const attendanceRecords = await Attendance.find({ studentId: student._id });
        
                    const totalDays = attendanceRecords.length;
                    const totalPresent = attendanceRecords.filter(record => record.status === 'Present').length;
                    const totalLeave = attendanceRecords.filter(record => record.status === 'Absent').length;
                    const attendancePercentage = totalDays > 0 ? (totalPresent / totalDays) * 100 : 0;
        
                    return {
                        studentId: student._id,
                        name: student.name,
                        totalLeave,
                        totalPresent,
                        attendancePercentage: Math.round(attendancePercentage)
                    };
                }));
        
                res.status(200).json({
                    message: 'Attendance report generated successfully',
                    report
                });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

