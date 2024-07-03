const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const translatorRouter = require("./routes/TranslatorRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/translator", translatorRouter);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`http://localhost:${PORT}`);
});