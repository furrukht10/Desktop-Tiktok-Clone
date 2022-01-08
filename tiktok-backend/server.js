import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import Data from "./data.js";
import Videos from "./models/dbModel.js";
import dotenv from "dotenv";
import router from "./routes/postRoutes.js";

//app configuration
dotenv.config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Database connection successful! 😎`))
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) => {
  res.status(200).send("");
});

app.use("/v2/posts", router);

//listener
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
