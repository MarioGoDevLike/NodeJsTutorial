const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const workoutRoutes = require("./routes/workouts");
// Express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// connect to Mongoose
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 4000!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
