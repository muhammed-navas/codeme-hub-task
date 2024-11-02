import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import studentRoutes from './routes/studentRoutes.js'
import attendanceRoutes from './routes/attendanceRoutes.js';


connectDB();
const app=express();
app.use(cors());
app.use(express.json()) 
app.use("/students",studentRoutes);
app.use("/attendance",attendanceRoutes);

app.use("/",(req,res,next)=>{
    res.send("Hello world")
});


const PORT=process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});