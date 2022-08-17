/** @format */

let express = require(`express`);

let logger = require(`morgan`);
let cookieParser = require(`cookie-parser`);
const { default: mongoose, mongo } = require("mongoose");

let Article = require(`./models/articles`);
let Comment = require(`./models/comments`);
let User = require(`./models/user`);

mongoose.connect(`mongodb://localhost/blog`, err => {
  console.log(err ? err : `blog database connected`);
});

let app = express();

app.use(logger(`dev`));
app.use(express.json());

app.use(`/admin`, (req, res, next) => {
  next(`unauthorized accessed`);
});

app.post(`/article`, (req, res) => {
  Article.create(req.body, (err, article) => {
    console.log(err);
    res.json(article);
  });
});

app.get(`/article`, (req, res) => {
  Article.find({}, (err, article) => {
    console.log(err);
    res.json({ article: article });
  });
});

// error handler

app.use((req, res, next) => {
  res.status(404).send(`Page not Found`);
});

app.use((err, req, res, next) => {
  let status = 500;
  res.send(status, err);
});

app.listen(8000, () => {
  console.log(`server listening on port 8k`);
});
