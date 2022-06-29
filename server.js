const express = require("express");
const router = require("./routes/users");
const app = express();

app.use(express.static("public")); //static rendering
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(logger)

//   res.download("server.js");
//    res.json({ message: 'OK'})
//res.status(500).send("Hi")
//res.sendStatus(500) //failure
//res.send("Hi") //debug purpose

//render html file

/*
app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "World" }); //server side rendering //sending data from backend to front
});
*/

const userRouter = require("./routes/users");
app.use("/users", userRouter); //good practice

app.listen(3000);
