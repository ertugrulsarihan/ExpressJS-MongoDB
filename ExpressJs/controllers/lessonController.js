const Lesson=require('../models/lesson');

lesson_index=(req,res)=>{
    Lesson.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { lessons: result });
    })
    .catch((err) => console.log(err));
}
add_lesson=(req,res)=>{
    console.log(req.body);
    const ders = new Lesson(req.body);
    ders
      .save()
      .then((result) => res.redirect("/lessons"))
      .catch((err) => console.log(err));
}
lesson_delete=(req,res)=>{
    const id = req.params.id;
    Lesson.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: "/lessons" });
      })
      .catch((err) => console.log(err));
}

module.exports={
    lesson_index,
    add_lesson,
    lesson_delete
}