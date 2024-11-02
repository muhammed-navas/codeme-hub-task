import Student from "../models/Student.js";

export const addStudent=async(req,res)=>{
    console.log(req.body,'body')
    try {
        const {name,rollNumber}=req.body;
        const newStudent=new Student({name,rollNumber});
        console.log(newStudent,'99')
        await newStudent.save();
        res.status(400).json({newStudent});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getStudents=async(req,res)=>{
    try {
        const students=await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
}