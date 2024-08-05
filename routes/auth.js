const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const user = require("../models/user");

const app = express();
app.use(express.json());
app.use(cors());

router.get("/signup", async (req, res) => {
  const { Name, email, password } = req.body;
  console.log({ Name, email, password });
  try {
    // Check if email is already registered
    const emailVerification = await user.findOne({ email: email });
    if (emailVerification) {
      return res.status(201).send({
        message: "Account already registered with this email",
      });
    }

    // Create a new user
    const newUser = new user({
      name: Name,
      email: email,
      password: password,
    });

    // Save the new user
    await newUser.save();
    res.status(200).send({ message: "Signup successful" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Technical issue" });
  }
});
router.get("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log({email,password})
  const account = await user.findOne({ email: email, password: password });

  console.log(account);
  if (account) {
    res.status(200).send({ message: "Login successfull" });
  } else {
    res.status(500).send({ message: "Invalid credentials" });
  }
});
module.exports = router;
