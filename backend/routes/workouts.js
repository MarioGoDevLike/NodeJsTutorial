const express = require('express')
const { createWorkout, getWorkout, getOneWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

const router = express.Router()

// Get all workouts
router.get('/',getWorkout)

// Get a single workout
router.get('/:id', getOneWorkout)

// Post a workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)
module.exports = router 