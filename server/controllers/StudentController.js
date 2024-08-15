const Student=require("../models/Student")

exports.getStudents =async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students)
        console.log(students)
    } 
    catch(err){
        res.send('Error'+err)
    }
}

exports.getStudent =async(req,res)=>{
    try{
        const student=await Student.find({ roll_no: req.params.roll_no });
        res.json(student)
        console.log(student)
    } 
    catch(err){
        res.send('Error'+err)
    }
}


exports.addStudent = async (req, res) => {
    const student = new Student({
        name: req.body.name,
        
        roll_no: req.body.roll_no,
       branch:req.body.branch,
       email:req.body.email,
       isCurrentStudent:req.body.isCurrentStudent
    });
    try {
        const result = await student.save();
        res.json(result);
        console.log(result);
    } catch (err) {
        res.send('Error');
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.find({ roll_no: req.params.roll_no });
        student[0].name = req.body.name;
        student[0].roll_no = req.body.roll_no;
        student[0].branch=re.body.branch;
        student[0].email = req.body.email;
        
        const result = await student[0].save();
        res.json(result);
    } catch (err) {
        res.send('Error');
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.find({ roll_no: req.params.roll_no });
        const result = await student[0].remove();
        res.json(result);
    } catch (err) {
        res.send('Error');
    }
}

