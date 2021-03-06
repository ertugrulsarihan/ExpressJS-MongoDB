const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const lessonSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true}
},{timestamps:true});


const Lesson=mongoose.model('Lesson',lessonSchema);

module.exports=Lesson;