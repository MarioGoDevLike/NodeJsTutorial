const WorkoutModel = require("../models/WorkoutModel");
const mongoose = require("mongoose");

// get single workout
const getOneWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findById(id);
  if (!workout) {
    res.status(400).json({ error: "No such Workout " });
  }
  res.status(200).json(workout);
};

// get Workout
const getWorkout = async (req, res) => {
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 }).lean();
  res.status(200).json(workouts);
};

// Create a workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await workoutModel.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout.toObject());
    res.json({ mssg: "Post a new workout" });
    return;
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(400).json({ error: "No such Workout " });
  }
  res.status(200).json(workout);
};

// Update Workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await WorkoutModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    res.status(400).json({ error: "No such Workout " });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkout,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
};
