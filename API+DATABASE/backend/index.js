const express = require("express");
const app = express();
const cors = require("cors"); // ✅ import cors\
app.use(cors());
const sequelize = require("./utils/index").default;
const sequelize2 = require("./utils/index2").default;
app.use(express.json());
const userRouter = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes"); // path check!

app.use("/", userRouter.router);
app.use("/", authRoutes);

// app.get('/',(req,res)=>{
//     res.send('Get is working fine from backend');
// });
// app.listen(4000, () => {
//   console.log('Backend server is running on port 4000');
// });

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");
    require("./database/data");

    await sequelize2.authenticate();
    console.log("✅ PostgreSQL DB2 connected");

    // create tables automatically (DEV ONLY)
    await sequelize.sync({ alter: true });

    app.listen(4000, () => {
      console.log(`🚀 Server running on port: 4000`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

startServer();
