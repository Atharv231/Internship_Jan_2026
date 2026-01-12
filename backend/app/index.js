require("dotenv").config(); // for env configuration
const express = require("express"); // express library

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const userRouter = require("./routes/userRoutes");
const sequelize = require("./utils/db").default;

app.use("/users", userRouter.router);

//create a gate way or create a connection to the data base
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");
    require("./model/data");
    // create tables automatically (DEV ONLY)
    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

startServer();

// app.use("/", (req, res) => {
//   console.log(req.params);
//   console.log(req.body);
//   console.log(req.query);
//   res.json(`abc`);
//   console.log(`call to backend`);
// });
// app.listen(PORT, () => {
//   console.log(`server is running on portsss : ${PORT}`);
// });
