const express=require('express');
const Lesson=require('../models/lesson');
const router=express.Router();
const controller=require('../controllers/lessonController');


router.get('/lessons',controller.lesson_index);
router.post('/lessons',controller.add_lesson);
router.delete('/lessons/:id',controller.lesson_delete);
  
  
  
  module.exports=router;
  