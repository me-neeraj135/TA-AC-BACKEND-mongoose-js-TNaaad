/** @format */

let express = require(`express`);
let logger = require(`morgan`);
let User = require(`./models/user`);
const { default: mongoose } = require("mongoose");

mongoose.connect(`mongodb://localhost/sample`, err => {
  console.log(err ? err : `database connected`);
});

let app = express();

app.use(logger(`dev`));

// middleware

app.use(express.json());

// capture the data
// save the data in mongodb
// send the response

app.post(`/users`, (req, res, next) => {
  console.log(req.body);

  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);

    next();
  });
});

// app.get(`/users`, (req, res) => {
//   User.find({}, (err, user) => {
//     console.log(err);
//     res.json({ user: user });
//   });
// });

// app.get(`/users/:name`, (req, res) => {
//   let name = req.params.name;
//   User.findOne({ name: `${name}` }, (err, user) => {
//     console.log(err);
//     res.json(user);
//   });
// });

app.get(`/Users/:id`, (req, res) => {
  let id = req.params.id;

  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

// app.put(`/users/:id`, (req, res) => {
//   let id = req.params.id;
//   User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
//     res.json(updatedUser);
//   });
// });

// app.put(`/users/:id`, (req, res) => {
//   let id = req.params.id;
//   User.findOneAndUpdate(
//     { _id: id },
//     req.body,
//     { new: true },
//     (err, updatedUser) => {
//       console.log(err);
//       res.json(updatedUser);
//     }
//   );
// });

app.delete(`/users/:id`, (req, res) => {
  let id = req.params.id;

  User.findByIdAndDelete(id, (err, userDeleted) => {
    console.log(err);
    res.send(`${userDeleted.name} was deleted`);
  });
});

app.listen(8000, () => {
  console.log(`server listening on port 8k`);
});
