const express = require("express");
const validateEnrollment = require("../middleware/validateEnrollment");
const supabase = require("../supabaseClient");
const router = express.Router();


//Get/courses
router.get("/courses", async (req, res) => {
    const{data,error}=await supabase.from("courses").select("*");
    if(error){
        return res.status(500).json({error:error.message});
    }
    return res.json(data);
});
        

//Post/courses
router.post("/enroll", validateEnrollment, async (req, res) => {
    const { student_name, course_id } = req.body;
    const { data, error } = await supabase.from("enrollments").insert([
      { student_name, course_id },
    ]);
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(data);
  });

  //GET/courses/:id/enrollments
  router.get("/courses/:id/enrollments", async (req, res) => {          
    const course_id = req.params.id;    
    const { data, error } = await supabase.from("enrollments").select("*").eq("course_id", course_id);          
    if (error) {
      return res.status(500).json({ error: error.message });
    }       
    return res.json(data);
    }); 

module.exports = router;
