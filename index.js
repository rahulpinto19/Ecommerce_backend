const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const auth = require("./routes/auth");
app.use(express.json());
app.use("/", auth);
app.listen(5000, () => {
  console.log(" Backend Running at 5000");
});
