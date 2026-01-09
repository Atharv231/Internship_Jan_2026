const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("request Recieve");
  next();
});

app.use(express.json());

let users = [{ name: "Atharv", age: 21 }];

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  req.status(201).json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/", (req, res) => {
  res.send("Hello my new server is running");
});

// app.get("/Home", (req, res) => {
//   res.send("Hello my new Home page  is running");
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "Atharva",
//     role: "Hart Breaker",
//   });
// });

app.listen(3000);
