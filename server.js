const express=require("express");
const cors=require("cors");
const logger=require("./middleware/logger");
const CourseRoutes=require("./routes/CourseRoutes");

require("dotenv").config();
const app=express();

app.use(cors());
app.use(express.json());
app.use(logger);    
app.use("/",courseRoutes);

const PORT=process.env.PORT||5174

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}); 