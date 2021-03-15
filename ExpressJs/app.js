const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const lessonRoutes=require('./routes/lessonRoutes');

const Lesson = require("./models/lesson");

const dbUri =
  "mongodb+srv://Ertugrul:Ertugrul@cluster1.bcqt2.mongodb.net/blogDB?retryWrites=true&w=majority";
const app = express();

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.set("views", "htmls");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(lessonRoutes);

//Get all lessons

app.get("/all-lessons", (req, res) => {
  Lesson.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Get callback with id parametr
app.get("/id-lesson", (req, res) => {
  Lesson.findById("604e60adc4a9115138f5a566")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.redirect("/lessons");
});



app.get("/about", (req, res) => {
  res.render("about", { about: "Evden Eğitim Hakkında" });
});



app.get("/lessons/:id", (req, res) => {
  const id = req.params.id;
  Lesson.findById(id).then((result) => {
    res.render("detay", { lesson: result });
  });
});

app.get("/lesson/add", (req, res) => {
  res.render("add");
});


app.use((req, res) => {
  res.status(404).render("404");
});
