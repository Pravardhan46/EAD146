const express=require("express")
const router=express.Router()
const Student=require("../models/Student")
const StudentController=require("../controllers/StudentController")


router.get('/',StudentController.getStudents);
router.get('/:roll_no',StudentController.getStudent)
router.post('/',StudentController.addStudent)
router.patch('/:roll_no',StudentController.updateStudent)
router.delete('/:roll_no',StudentController.deleteStudent)

module.exports=router;
