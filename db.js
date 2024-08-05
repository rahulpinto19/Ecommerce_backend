const mongoose = require("mongoose");
const url =
  "mongodb+srv://rahulyadav252424:Yf2dsv8HUUhuAmGh@cluster0.sw3322j.mongodb.net/ecommerce";
const connectToMongo = async () => {
  await mongoose.connect(url);
  {
    console.log("connected to database");
  }
};
connectToMongo();
