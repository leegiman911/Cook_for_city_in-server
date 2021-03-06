const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const PORT = 50000;
const db = require("./models");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login")
const recipeRouter = require("./routes/recipe")
const mypageRouter = require("./routes/mypage")


app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "cooksiin",
    resave: false,
    saveUninitialized: true,
  })
);

app.options("/signup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.send();
});

app.use("/a", (req, res) => {
  res.send("Welcome to Man's Club");
});


app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/mypage', mypageRouter);
app.use('/recipe', recipeRouter)

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});